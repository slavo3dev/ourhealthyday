import { FC } from "react";
import { NavBar } from "component/Navbar";
import { BlogWelcome } from "component/Blog";
import { Layout } from "component/Layout";


const BlogPage: FC = () => {
	return (
		<Layout>
			<NavBar />
			<BlogWelcome />
		</Layout>
	);
};

export default BlogPage;
