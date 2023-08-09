import { FC } from "react";
import { NavBar } from "component/Navbar";
import { BlogWelcome } from "component/Blog";
import { Layout } from "component/Layout";
import { Post } from "component/Post";


const BlogPage: FC = () => {
	return (
		<Layout>
			<NavBar />
			<BlogWelcome />
			<Post posts={[]} />
		</Layout>
	);
};

export default BlogPage;
