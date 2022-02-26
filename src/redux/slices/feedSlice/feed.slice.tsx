import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
  feeds: any[];
  loading: boolean;
  error: string;
}

export const feedSlice = createSlice({
  name: "feed",
  initialState: {
    feeds: [],
    loading: true,
    error: "",
  } as IinitialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    getFeed(state, action) {
      state.feeds = action.payload;
    },
    setError(state, action) {
      console.log(action, " action");
      state.error = action.payload;
    },
  },
});
