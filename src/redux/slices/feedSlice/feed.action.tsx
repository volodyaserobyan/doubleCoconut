import FeedService from "../../../services/feed.service";
import { feedSlice } from "./feed.slice";

export const getFeed = () => async (dispatch: any) => {
  try {
    const feed = FeedService.getFeeds();
    dispatch(feedSlice.actions.getFeed(await feed));
    dispatch(feedSlice.actions.setLoading(false));
  } catch (err) {
    dispatch(feedSlice.actions.setError("Oops Something went wrong !!!"));
    dispatch(feedSlice.actions.setLoading(false));
  }
};

export const addFeed =
  (feed: string, userId: string) => async (dispatch: any) => {
    try {
      FeedService.addFeed(feed, userId);
    } catch (err) {
      dispatch(feedSlice.actions.setError("Oops Something went wrong !!!"));
    }
  };

export const deleteFeed = (id: string) => async (dispatch: any) => {
  try {
    FeedService.deleteFeed(id);
  } catch (err) {
    dispatch(feedSlice.actions.setError("Oops Something went wrong !!!"));
  }
};
