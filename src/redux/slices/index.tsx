import { authReducer } from "./authSlice";
import { feedReducer } from "./feedSlice";

export const reducer = {
  auth: authReducer,
  feed: feedReducer,
};
