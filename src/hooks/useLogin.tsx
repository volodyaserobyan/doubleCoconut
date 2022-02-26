import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import { authSelectors } from "../redux/slices/authSlice";
import { signIn, signUp } from "../redux/slices/authSlice/auth.action";
import { useAppDispatch, useAppSelector } from "../redux/store";

const useLogin = (islogin: boolean) => {
  const [error, setError] = useState<String>("");
  const [loading, setLoading] = useState<Boolean>(false);

  const firstNameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const lastNameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const companyNameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const dispatch = useAppDispatch();
  const status = useAppSelector(authSelectors.status);
  const resError = useAppSelector(authSelectors.error);
  const user = useAppSelector(authSelectors.user);
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (passwordRef.current.value.length < 6) {
      return setError("Password must be more than equal to 6 characters");
    }
    dispatch(
      islogin
        ? signIn(emailRef.current.value, passwordRef.current.value)
        : signUp(emailRef.current.value, passwordRef.current.value)
    );
    setError("");
  };

  useEffect(() => {
    setError(resError);
  }, [resError]);

  useEffect(() => {
    setLoading(status === "pending" ? true : false);
  }, [status]);

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user, history]);

  return {
    error,
    loading,
    firstNameRef,
    emailRef,
    passwordRef,
    lastNameRef,
    companyNameRef,
    handleSubmit,
  };
};

export default useLogin;
