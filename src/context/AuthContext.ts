import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Router from "next/router";
import { destroyCookie } from "nookies";
import { AuthContextRequirements, User } from "../utils/types/AuthContextRequirements";

const initialState: AuthContextRequirements = {
  user: {
    email: '',
    id: '',
    name: '',
    banner: ''
  },
  isAuthenticated: false
}

const AuthContext = createSlice({
  name: 'AuthContext',
  initialState,
  reducers: {
    sigIn(state, {payload}: PayloadAction<User>){
      console.log(payload.token)

      const {banner, email, name, id} = payload

      state.user = {
        banner,
        email,
        id,
        name
      }
    },
    sigOut(){
      try {
        destroyCookie(undefined,'@photoauth')
        Router.push('/')
      } catch (error) {
        console.log('erro ao deslogar')
      }
    }
  }
})

export const {sigIn, sigOut} = AuthContext.actions
export {AuthContext}


export const stateDataContext = (state: any) => {
  return state.AuthContext as AuthContextRequirements
}