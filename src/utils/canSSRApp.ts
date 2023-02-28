import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { destroyCookie, parseCookies } from "nookies";
import { AuthTokenError  } from "../services/Errors/AuthResponseError";

export function canSSRAuth<P extends { [key: string]: any; }>(fn: GetServerSideProps<P>){
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx)

    const token = cookies['@photoauth']

    if(!token){
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }

    try{
      return await fn(ctx)
    } catch(error){
      if(error instanceof AuthTokenError){
        destroyCookie(ctx, '@photoauth')

        return {
          redirect: {
            destination: '/',
            permanent: false
          }
        }
      }
    }

    return await fn(ctx)
  }
}