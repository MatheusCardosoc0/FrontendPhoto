import Router  from "next/router";
import { setCookie } from "nookies";
import { toast } from "react-toastify";
import { api } from "../../services/axiosConfig";
import { SigInRequirements } from "../../utils/types/AuthContextRequirements";
import { sigIn } from "../AuthContext";

export const LoginUser = (data: SigInRequirements): any => async (dispatch: any) => {
  try {
    const {email, password} = data

    const response = await api.post('/login', {
      email,
      password
    } as SigInRequirements)

    setCookie(undefined, '@photoauth', response.data.token, {
      maxAge: 60 * 60 * 24 * 30,
      path: '/'
    })

    dispatch(sigIn(response.data))

    api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`

    Router.push('/dashboard')

  } catch (error: any) {
    toast.error('Não foi possivel fazer o login')
    console.log(error.message)
  }
}