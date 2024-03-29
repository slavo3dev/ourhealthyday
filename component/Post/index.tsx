import React, { FC, useState, useEffect } from "react";
import { GRAPHQL_API_URL, GRAPHQL_QUERY } from "@lib/api";
import { IBlogPosts } from "@lib/types";
import axios from "axios";

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
	}, [blogPosts]);

	return (
		<>
			<div className="font-serif mt-5">
				{blogPosts.map((post) => (
					<div key={post.slug} className="my-12 py-12 bg-teal-50 border-2 border-teal-500 mx-12 px-16 rounded-lg drop-shadow-2xl shadow-lg bg-gradient-to-b from-white to-blue-100 postcontent-section">
						<h2 className=" flex text-black text-3xl font-bold text-center">
							{post.title}
						</h2>
						<div className="pt-8 inline-block">
							{blogPosts.map((post) => (
								<img
									key={post.featuredImage.url}
									src={post.featuredImage.url}
									alt={post.title}
									className="rounded-lg drop-shadow-md w-80 ml-0"
								/>
							))}
						</div>            
						<p>
            Updated At:{" "}
							{new Date(post.updatedAt).toLocaleDateString()}
						</p>
						<div className="max-w-xs">
							<p className="bg-blue-400 px-4 italic rounded-full">
                        Category:{" "}
								{post.categories.map((category, index) => (
									<span key={category.slug}>
										{index > 0 && ", "}
										{category.name}
									</span>
								))}
							</p>
						</div>
						{/* HTML content */}
						<div>
							<div className="text-lg pt-12"
								dangerouslySetInnerHTML={{ __html: post.content.html }}
							/>
						</div>
					</div>
				))}
			</div>
		</>
	);
};