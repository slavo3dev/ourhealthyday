/* eslint-disable indent */
import React, { FC, useState, useEffect } from "react";
import { GRAPHQL_API_URL, GRAPHQL_QUERY } from "@lib/api";
import { IBlogPosts } from "@lib/types";
import axios from "axios";
import Link from "next/link";

export const BlogPostCard: FC = () => {
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
    <div className="container mx-auto px-20 py-8 font-serif">
      <h2 className="text-center text-teal-800 text-6xl font-semibold mb-4 py-12">
        Blog Posts
      </h2>
      <div className="grid grid-rows-1 grid-flow-col gap-4 pt-12 bg-green-300 pl-16 rounded-lg drop-shadow-2xl">
        <div className="h-64 w-64 row-span-3 ...">
          {blogPosts.map((post) => (
            <img
              key={post.featuredImage.url}
              src={post.featuredImage.url}
              alt={post.title}
              className="rounded-lg drop-shadow-md"
            />
          ))}
        </div>
        <ul>
          {blogPosts.map((post) => (
            <li key={post.id} className="mb-4">
              <Link href="./posts">
                {" "}
                <a className="col-span-2 ... text-green-900 text-3xl font-bold ml-2">
                  {post.title}
                </a>{" "}
              </Link>

              {blogPosts.map((post) => (
                <div
                  key={post.slug}
                  className="row-span-2 col-span-2 ... bg-green-100 text-sm mt-2 px-6 py-6 mr-4 rounded-lg drop-shadow-md"
                >
                  <p>{post.excerpt}</p>
                  <div className="flex space-x-4 pt-4">
                  <Link href="https://www.slavo.io/"><p className="hover:font-mono">Author: {post.author.name}</p></Link>
                  <p>Published on: {""}
                  {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                  </div>
                </div>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};