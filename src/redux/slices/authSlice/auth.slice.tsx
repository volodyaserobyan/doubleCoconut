import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user") as string);

interface IinitialState {
  status: null | "pending" | "fulfilled" | "rejected";
  user: any;
  errors: string;
}

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: null,
    user: user,
    errors: "",
  } as IinitialState,
  reducers: {
    setStatusUser(state, action) {
      state.status = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    signOutUser(state, action) {
      state.user = action.payload;
      localStorage.removeItem("user");
    },
    setError(state, action) {
      state.errors = action.payload;
    },
  },
});
