import {Route, Routes, useSearchParams} from "react-router-dom";
import NoAuth from "./components/NoAuth";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import Auth from "./components/Auth";
import HomePage from "./pages/HomePage";
import CounterPage from "./pages/CounterPage";
import React, {useMemo} from "react";

export default function Root () {
  const [searchParams] = useSearchParams();
  const redirect = useMemo(
    () => searchParams.get("redirect") || "/",
    [searchParams]
  );

  return (
    <>
      <Routes>
        <Route path="/signup" element={
          <NoAuth redirect={redirect}>
            <SignUpPage/>
          </NoAuth>
        }/>
        <Route path="/login" element={
          <NoAuth redirect={redirect}>
            <LoginPage/>
          </NoAuth>
        }/>
        <Route path="/" element={
          <Auth roles={["BASIC", "ADMIN"]}>
            <HomePage/>
          </Auth>
        }/>
        <Route path="/counter" element={
          <Auth roles={["BASIC"]}>
            <CounterPage/>
          </Auth>
        }/>
      </Routes>
    </>
  )
}