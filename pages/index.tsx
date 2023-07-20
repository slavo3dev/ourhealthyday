/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import type { NextPage } from "next";
import { NavBar } from "component/Layout/Navbar";
import { Welcome } from "component/Layout/Welcome";
import { FunctionFactList } from "component/Layout/Sources";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />

      <main className="main">
        <Welcome />
        <section>
          <FunctionFactList />
        </section>
      </main>
    </>
  );
};

export default Home;
