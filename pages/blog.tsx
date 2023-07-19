import { FC } from "react";
import Navigation from "component/Navbar";
import { BlogWelcome } from "component/Blog";

const BlogPage: FC = () => {
    return (
        <>
          <Navigation />
    
          <main className="main">
            <section>
                <BlogWelcome />
            </section>
          </main>
        </>
    )
};

export default BlogPage;