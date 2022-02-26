import * as actions from "./auth.action";
import * as selectors from "./auth.selector";
import { authSlice } from "./auth.slice";

export const authActions = {
  ...authSlice.actions,
  ...actions,
};

export const authSelectors = {
  ...selectors,
};

export const authReducer = authSlice.reducer;
