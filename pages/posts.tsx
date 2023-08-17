import { FC } from "react";
import { NavBar } from "component/Navbar";
import { Layout } from "component/Layout";
import { BlogContent } from "component/Post";

const BlogPage: FC = () => {
	return (
		<Layout>
			<NavBar />
			<BlogContent />
		</Layout>
	);
};

export default BlogPage;