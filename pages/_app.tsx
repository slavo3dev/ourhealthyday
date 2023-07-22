import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "component/Layout";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Head>
				<link rel="shortcut icon" href="/favicon.png" />
			</Head>
			<Component { ...pageProps } />
		</Layout>
	);
}

export default MyApp;
