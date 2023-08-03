/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import type { NextPage } from "next";
import { NavBar } from "component/Navbar";
import { Welcome } from "component/Welcome";
import { FunctionFactList } from "component/Sources";
import { Subscribe } from "component/Subscribe";
import { Layout } from "component/Layout";

const Home: NextPage = () => {
	return (
		<Layout>
			<NavBar />
			<Welcome />
			<FunctionFactList />
			<Subscribe />
		</Layout>
	);
};

export default Home;
