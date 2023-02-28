import { configureStore } from "@reduxjs/toolkit";
import { AuthContext } from "./AuthContext";

export const store = configureStore({
  reducer: {
    AuthContext: AuthContext.reducer
  }
})