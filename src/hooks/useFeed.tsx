import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

import { signOut } from "../redux/slices/authSlice/auth.action";
import { feedSelectors } from "../redux/slices/feedSlice";
import { addFeed, getFeed } from "../redux/slices/feedSlice/feed.action";
import { useAppSelector } from "../redux/store";

const useFeed = () => {
  const currentuser = JSON.parse(localStorage.getItem("user") as string);
  const addPostRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const dispatch = useDispatch();
  const feed = useAppSelector(feedSelectors.feeds);
  const error = useAppSelector(feedSelectors.error);
  const loading = useAppSelector(feedSelectors.loading);
  useEffect(() => {
    dispatch(getFeed());
  }, [dispatch]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addFeed(addPostRef.current.value, currentuser.user.uid));
    addPostRef.current.value = "";
    dispatch(getFeed());
  };

  const logOutUser = () => {
    dispatch(signOut());
  };

  return {
    feed,
    error,
    loading,
    handleSubmit,
    addPostRef,
    logOutUser,
  };
};

export default useFeed;
