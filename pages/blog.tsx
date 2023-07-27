import { FC } from "react";
import { NavBar } from "component/Navbar";
import { BlogWelcome } from "component/Blog";
import { IncrementCounter } from "component/Counter";
import { Layout } from "component/Layout";


const BlogPage: FC = () => {
  return (
    <Layout>
          <NavBar />
          <BlogWelcome />
          <IncrementCounter />
    </Layout>
  );
};

export default BlogPage;
