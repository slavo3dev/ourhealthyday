/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import type { NextPage } from "next";
import { NavBar } from "component/Navbar";
import { Welcome } from "component/Welcome";
import { FunctionFactList } from "component/Sources";
import { Subscribe } from "component/Subscribe";

const Home: NextPage = () => {
  return (
    <>
          <NavBar />
          <Welcome />
          <FunctionFactList />
          <Subscribe />
    </>
  );
};

export default Home;
