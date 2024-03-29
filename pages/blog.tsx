import { FC } from "react";
import { NavBar } from "component/Navbar";
import { BlogWelcome } from "component/Blog";
import { Layout } from "component/Layout";
import { BlogPostCard } from "component/PostCard";


const BlogPage: FC = () => {
	return (
		<Layout>
			<NavBar />
			<BlogWelcome />
			<BlogPostCard />
		</Layout>
	);
};

export default BlogPage;
