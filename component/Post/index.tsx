/* eslint-disable indent */
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
		<div className="container mx-auto px-20">
			<h2 className="text-center text-teal-800 text-6xl font-semibold mb-4">Blog Posts</h2>
			<div className="flex pt-12">
				<div className="h-64 w-64">
					{blogPosts.map((post) => (
						<img key={post.featuredImage.url} src={post.featuredImage.url} alt={post.title} />
					))}
				</div>
				<ul>
					{blogPosts.map((post) => (
						<li key={post.id} className="mb-4">
							<a 
								className="text-green-500 text-4xl pl-52 font-bold">
								{post.title}
							</a> {/*href={`/blog/${post.slug}`}*/}
							<div className="bg-lime-100 mt-20 pl-4 ml-2">
							<p key={post.author.name} className="text-teal-700 text-lg">Author: {post.author.name}</p>
							<p key={post.author.bio} className="text-teal-700">{post.author.bio}</p>
							<p className="text-gray-500">
							Published on: {""}
								{new Date(post.createdAt).toLocaleDateString()}
							</p>
							</div>
						</li>
					))}
				</ul>
			</div>
			<div>
				{blogPosts.map((post) => (
					<div key={post.slug} className="mb-4 bg-green-100">
						<p>{post.content.text}</p>
					</div>
				))}
			</div>
		</div>
	);
};