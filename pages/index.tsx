/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useEffect, useState, Key } from "react";
import type { NextPage } from "next";
import Navigation from "component/Navbar";
import { Welcome } from "component/Welcome";
import { FunctionFactList } from "component/Sources";

const Home: NextPage = () => {

  return (
    <>
      <Navigation />

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
