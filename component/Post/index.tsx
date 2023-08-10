import React, { FC, useState, useEffect } from "react";
import axios from "axios";

const GRAPHQL_API_URL =
	"https://api-us-west-2.hygraph.com/v2/cll2csb0x0ic001un2jzvdvho/master";

const GRAPHQL_QUERY = `
  query {
    posts {
      title
      updatedAt
      content {
        text
      }
      author {
        bio
        name
        id
        photo {
          url
        }
      }
      createdAt
      slug
      title
      excerpt
      featuredImage {
        url
      }
      categories {
        name
        slug
      }
    }
  }
`;

interface BlogPosts {
	updatedAt: string;
	id: string;
	createdAt: string;
	title: string;
	slug: string;
	bio: string;
	name: string;
	url: string;
	content: {
		text: string; 
	}
}

export const BlogPost: FC = () => {
	const [blogPosts, setBlogPosts] = useState<BlogPosts[]>([]);

	useEffect(() => {
		axios
			.post(GRAPHQL_API_URL, { query: GRAPHQL_QUERY})
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
							className="text-blue-500 font-bold">
							{post.title}
						</a> {/*href={`/blog/${post.slug}`}*/}
						<p className="text-gray-500">
							Published on:{""}
							{new Date(post.createdAt).toLocaleDateString()}
						</p>
					</li>
				))}
			</ul>
			<div>
				{blogPosts.map((post) => (
					<div key={post.slug} className="mb-4">
						<p>{post.content.text}</p>
					</div>
				))}
			</div>
		</div>
	);
};
