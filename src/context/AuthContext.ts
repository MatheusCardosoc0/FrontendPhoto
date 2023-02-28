import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    }
  }
})

export const {sigIn} = AuthContext.actions
export {AuthContext}