import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { authSelectors } from "../redux/slices/authSlice";
import { deleteFeed, getFeed } from "../redux/slices/feedSlice/feed.action";
import { useAppSelector } from "../redux/store";

const useFeedItem = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleDelete = async (id: any) => {
    dispatch(deleteFeed(id));
    dispatch(getFeed());
  };
  const user = useAppSelector(authSelectors.user);

  useEffect(() => {
    if (!user) {
      history.push("/signin");
    }
  }, [user, history]);
  return { handleDelete, user };
};

export default useFeedItem;
