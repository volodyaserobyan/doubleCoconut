import * as actions from "./feed.action";
import * as selectors from "./feed.selector";
import { feedSlice } from "./feed.slice";

export const feedActions = {
  ...feedSlice.actions,
  ...actions,
};

export const feedSelectors = {
  ...selectors,
};

export const feedReducer = feedSlice.reducer;
