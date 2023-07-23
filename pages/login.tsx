import { FC, useState } from "react";
import { NavBar } from "component";
import { LoginForm } from "component/Login";

const LoginPage: FC = () => {
  return (
    <>
      <NavBar />
      <LoginForm />
    </>
  );
};
export default LoginPage;
