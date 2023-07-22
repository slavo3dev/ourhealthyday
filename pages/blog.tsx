import { FC } from "react";
import { NavBar } from "component/Navbar";
import { BlogWelcome } from "component/Blog";
import { IncrementCounter } from "component/Counter";

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
