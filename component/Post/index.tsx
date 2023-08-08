import {FC} from "react";
import { PostCard } from "component/PostCard";
import { Categories } from "component/Categories";
import { PostWidget } from "component/PostWidget";

export const Post: FC= () =>
{
	const posts = [
		{
			title: "React Testing",
			excerpt: "Learn React Testing"
		},
		{
			title: "React With Tailwind",
			excerpt: "Learn React With Tailwind"
		}
	];
	return (
		<div className="container mx-auto px-10 mb-8">
			<h1>OHD Blog</h1>
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
				<div className="lg:col-span-8 col-span-1">
					{posts.map((post, index) => (
						<PostCard post={post} key={post.title} />
					))}
				</div>
				
				<div className="lg:col-span-4 col-span-1">
					<div className="lg: sticky realtive top-8">
						<PostWidget />
						<Categories />
					</div>
				</div>
			</div>
			
		</div>
	);
};