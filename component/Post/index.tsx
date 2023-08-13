/* eslint-disable indent */
import React, { FC, useState, useEffect } from "react";
import { GRAPHQL_API_URL, GRAPHQL_QUERY } from "@lib/api";
import { IBlogPosts } from "@lib/types";
import axios from "axios";
import { BlogPostCard } from "component/PostCard";

export const BlogContent: FC = () => {
  const [blogPosts, setBlogPosts] = useState<IBlogPosts[]>([]);

  useEffect(() => {
    axios
      .post(GRAPHQL_API_URL, { query: GRAPHQL_QUERY })
      .then((response) => {
        const posts = response?.data?.data?.posts;
        if (posts) {
          setBlogPosts(posts);
        }
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
      });
    console.log("BlogPost");
  }, []);

  return (
    <div>
        <BlogPostCard />
      {/*this is content, need to make the component for posts only, and then import it here*/}
      <div>
        {blogPosts.map((post) => (
          <div key={post.slug} className="mb-4 bg-green-300">
            <p>{post.content.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
