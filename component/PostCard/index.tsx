import { FC } from "react";

export const PostCard: FC = ({ post }) => {
	return (
		<div>
			{post.title}
			{post.excerpt}
		</div>
	);
};