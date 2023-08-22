/* eslint-disable indent */
import React, { FC, useState, useEffect } from "react";
import { GRAPHQL_API_URL, GRAPHQL_QUERY } from "@lib/api";
import { IBlogPosts } from "@lib/types";
import axios from "axios";
import Link from "next/link";
import { CategorySelection } from "component/SearchCategory";

export const BlogPostCard: FC = () => {
  const [blogPosts, setBlogPosts] = useState<IBlogPosts[]>([]);
  const [selectedCategory, setSelectedCategory] =
    useState<string>("");
  const [selectedAuthor, setSelectedAuthor] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);

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

  const handleCategoryChange = (selectedCategory: string) => {
    setSelectedCategory(selectedCategory);
    setIsSearching(true);
  };

  const handleAuthorChange = (selectedAuthor: string) => {
    setSelectedAuthor(selectedAuthor);
    setIsSearching(true);
  };

  const filteredPosts = blogPosts.filter((post) => {
    if (
      (selectedCategory === "" ||
        selectedCategory === "All Categories") &&
      (selectedAuthor === "" || selectedAuthor === "All Authors")
    ) {
      // Show all posts when both options are set to "All"
      return true;
    }

    if (
      (selectedCategory === "" ||
        selectedCategory === "All Categories") &&
      post.author.name === selectedAuthor
    ) {
      // Show posts by the selected author when category is "All Categories"
      return true;
    }

    if (
      (selectedAuthor === "" || selectedAuthor === "All Authors") &&
      post.categories.some((cat) => cat.name === selectedCategory)
    ) {
      // Show posts in the selected category when author is "All Authors"
      return true;
    }

    if (
      post.categories.some((cat) => cat.name === selectedCategory) &&
      post.author.name === selectedAuthor
    ) {
      // Show posts that match both selected category and author
      return true;
    }

    return false;
  });

  useEffect(() => {
    setIsSearching(false);
  }, [filteredPosts]);

  return (
    <div className="container mx-auto px-20 py-8 font-serif postcard-section">
      <h2 className="text-center text-teal-800 text-6xl font-semibold mb-4 py-12">
        Blog Posts
      </h2>
      <CategorySelection
        onCategoryChange={handleCategoryChange}
        onAuthorChange={handleAuthorChange}
      />
      <div className="pt-12 bg-green-300 pl-16 rounded-lg drop-shadow-2xl postcard-div">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className={`mb-4 grid grid-rows-1 grid-flow-col gap-4 ${
              isSearching ? "hidden" : "animate-fade-in"
            }`}
          >
            <div className="h-64 w-64 row-span-3 ...">
              {filteredPosts.map((post) => (
                <img
                  key={post.featuredImage.url}
                  src={post.featuredImage.url}
                  alt={post.title}
                  className="rounded-lg drop-shadow-md postcard-img"
                />
              ))}
            </div>
            <ul>
              {filteredPosts.map((post) => (
                <li key={post.id} className="mb-4">
                  <Link href="./posts">
                    {" "}
                    <a className="col-span-2 ... text-green-900 text-3xl font-bold ml-2">
                      {post.title}
                    </a>{" "}
                  </Link>

                  {filteredPosts.map((post) => (
                    <div
                      key={post.slug}
                      className="row-span-2 col-span-2 ... bg-green-100 text-sm mt-2 px-6 py-6 mr-4 rounded-lg drop-shadow-md"
                    >
                      <p>{post.excerpt}</p>
                      <div className="flex space-x-4 pt-4">
                        <Link href="https://www.slavo.io/">
                          <p className="hover:font-mono">
                            Author: {post.author.name}
                          </p>
                        </Link>
                        <p>
                          Published on: {""}
                          {new Date(
                            post.createdAt,
                          ).toLocaleDateString()}
                        </p>
                        <div>
                          <p className="bg-green-400 px-4 rounded-full">
                            Category:{" "}
                            {post.categories.map(
                              (category, index) => (
                                <span key={category.slug}>
                                  {index > 0 && ", "}
                                  {category.name}
                                </span>
                              ),
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};