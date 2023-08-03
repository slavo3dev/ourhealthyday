import { FC, useEffect, useState } from "react";
import axios from "axios";

// Define the GraphQL query
const GRAPHQL_API_URL =
  "https://api-us-west-2.hygraph.com/v2/clkvgqz0o0bvg01ui9hep8o37/master";
const GRAPHQL_QUERY = `
  query Posts {
    posts {
      createdAt
      id
      postDate
      publishedAt
      slug
      title
      updatedAt
    }
  }
`;

interface BlogPost {
  createdAt: string;
  id: string;
  postDate: string;
  publishedAt: string;
  slug: string;
  title: string;
  updatedAt: string;
}

export const BlogPosts: FC = () => {
  // State to hold the blog posts
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  // Fetch blog posts from GraphCMS API
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
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id} className="mb-4">
            <a
              href={`/blog/${post.slug}`}
              className="text-blue-500 font-bold"
            >
              {post.title}
            </a>
            <p className="text-gray-500">
              Published on:{" "}
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
