import { FC } from "react";
import { NavBar } from "component/Navbar";
import { BlogWelcome } from "component/Blog";
import { Layout } from "component/Layout";
import { BlogPosts } from "component/Post";

const BlogPage: FC = () => {
  return (
    <Layout>
      <NavBar />
      <BlogWelcome />
      <BlogPosts />
    </Layout>
  );
};

export default BlogPage;
