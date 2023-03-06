import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";
import { AuthTokenError } from "./Errors/AuthResponseError";

export const baseUrl = ""

//https://backend-photo.vercel.app/

export function setupClient(ctx: any = undefined){
  let cookies = parseCookies(ctx)

  const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
      Authorization: `Bearer ${cookies['@photoauth']}`
    }
  })

  api.interceptors.response.use(response => {
    return response
  },(error: AxiosError) => {
    if(error.response?.status === 401){
      if(typeof window !== undefined){

      }else{
        return Promise.reject(new AuthTokenError())
      }
    }

    return Promise.reject(error)
  })

  return api
}

export const api = setupClient()