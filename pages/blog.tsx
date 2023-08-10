import { FC } from "react";
import { NavBar } from "component/Navbar";
import { BlogWelcome } from "component/Blog";
import { Layout } from "component/Layout";
import { BlogPost } from "component/Post";


const BlogPage: FC = () => {
	return (
		<Layout>
			<NavBar />
			<BlogWelcome />
			<BlogPost />
		</Layout>
	);
};

export default BlogPage;
