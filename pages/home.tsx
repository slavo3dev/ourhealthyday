/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import type { NextPage } from "next";
import { NavBar } from "component/Layout/Navbar";
import { Welcome } from "component/Layout/Welcome";
import { FunctionFactList } from "component/Layout/Sources";
import { Subscribe } from "component/Subscribe";

const Home: NextPage = () => {
  return (
    <>
      <main>
        <NavBar />
        <section>
          <Welcome />
        </section>
        <section>
          <FunctionFactList />
        </section>
        <section>
          <Subscribe />
        </section>
      </main>
    </>
  );
};

export default Home;
