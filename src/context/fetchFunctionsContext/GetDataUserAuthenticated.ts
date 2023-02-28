import { parseCookies } from "nookies"
import { api } from "../../services/axiosConfig"
import { sigIn, sigOut } from "../AuthContext"

export const GetDataUserAuthenticated = (): any => async (dispatch: any) => {
  const {'@photoauth': token} = parseCookies()

  if(token){
    await api.get('user/details').then(response => dispatch(sigIn(response.data)))
  } else{
    dispatch(sigOut)
  }
}