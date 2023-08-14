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
    console.log("BlogContent");
  }, []);

  return (
    <div className="font-serif">
      <BlogPostCard />
      {blogPosts.map((post) => (
        <div key={post.slug} className="mb-4 bg-green-300 py-12 bg-green-300 mx-28 px-16 rounded-lg drop-shadow-2xl">
          <h2 className="text-green-900 text-3xl font-bold text-center">
            {post.title}
          </h2>
          <p>
            Updated At:{" "}
            {new Date(post.updatedAt).toLocaleDateString()}
          </p>

          {/* HTML content */}
          <div>
            <div className="text-lg pt-12"
              dangerouslySetInnerHTML={{ __html: post.content.html }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};