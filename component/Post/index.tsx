import React, { FC, useState, useEffect } from "react";
import { GRAPHQL_API_URL, GRAPHQL_QUERY } from "@lib/api";
import { IBlogPosts } from "@lib/types";
import axios from "axios";

export const BlogPost: FC = () => {
	const [blogPosts, setBlogPosts] = useState<IBlogPosts[]>([]);

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