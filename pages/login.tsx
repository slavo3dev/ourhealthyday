import { FC, useState } from "react";
import { NavBar } from "component";
import { LoginForm } from "component/Login";
import { Layout } from "component/Layout";


const LoginPage: FC = () => {
  return (
    <Layout>
      <NavBar />
      <LoginForm />
    </Layout>
  );
};
export default LoginPage;
