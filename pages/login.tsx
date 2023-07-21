import { FC, useState } from "react";
import { NavBar } from "component/Layout";
import { LoginForm } from "component/Layout/Login";

const LoginPage: FC = () => {
  return (
    <main>
      <NavBar />
      <section>
        <LoginForm />
      </section>
    </main>
  );
};
export default LoginPage;
