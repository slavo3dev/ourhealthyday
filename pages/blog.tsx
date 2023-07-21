import { FC } from "react";
import { NavBar } from "component/Layout/Navbar";
import { BlogWelcome } from "component/Layout/Blog";
import { IncrementCounter } from "component/Layout/Counter";

const BlogPage: FC = () => {
  return (
    <>
    <main className="flex-col">
      <NavBar />
        <section>
          <BlogWelcome />
        </section>
        <section >
          <IncrementCounter />
        </section>
      </main>
    </>
  );
};

export default BlogPage;
