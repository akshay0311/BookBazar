import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Signup, Home } from "../utils/constants/RouterConstants";

const HomeScreen = lazy(() => import("../pages/Home"));
const SignupScreen = lazy(() => import("../pages/Signup"));
const LoginScreen = lazy(() => import("../pages/Login"));

type INavigationProps = {};

const Navigation = (props: INavigationProps) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={Home} element={<HomeScreen />} />
          <Route path={Signup} element={<SignupScreen />} />
          <Route path={Login} element={<LoginScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navigation;
