import AuthService from "../../../services/auth.service";
import { authSlice } from "./auth.slice";

export const signUp =
  (email: string, password: string) => async (dispatch: any) => {
    try {
      dispatch(authSlice.actions.setStatusUser("pending"));
      const user = AuthService.signUp(email, password);
      dispatch(authSlice.actions.setStatusUser("fulfilled"));
      dispatch(authSlice.actions.setUser(await user));
    } catch (err) {
      dispatch(authSlice.actions.setStatusUser("reject"));
      dispatch(authSlice.actions.setError("Oops Something went wrong !!!"));
    }
  };

export const signIn =
  (email: string, password: string) => async (dispatch: any) => {
    try {
      dispatch(authSlice.actions.setStatusUser("pending"));
      const user = AuthService.signIn(email, password);
      dispatch(authSlice.actions.setStatusUser("fulfilled"));
      dispatch(authSlice.actions.setUser(await user));
    } catch (err) {
      dispatch(authSlice.actions.setStatusUser("reject"));
      dispatch(authSlice.actions.setError("Email Not Found"));
    }
  };

export const signOut = () => async (dispatch: any) => {
  AuthService.signOut();
  dispatch(authSlice.actions.signOutUser(null));
};
