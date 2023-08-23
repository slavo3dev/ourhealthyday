import React, { FC, useState } from "react";
import { ICategorySelectionProps } from "@lib/types";

export const CategorySelection: FC<ICategorySelectionProps> = ({
	onSearchButtonClick,
}) => {
	const CATEGORIES = ["Mushroom World"];
	const AUTHORS = ["Slavo"];

	const [selectedCategory, setSelectedCategory] = useState("");
	const [selectedAuthor, setSelectedAuthor] = useState("");
	const [selectedTitle, setSelectedTitle] = useState("");

	return (
		<div className="bg-gradient-to-t from-green-400 to-green-200 my-8 h-32 drop-shadow-lg rounded-lg">
			<h2 className="text-center pt-3 text-xl font-bold tracking-tight text-green-900 drop-shadow-lg tracking-widest">
				Search posts by
				<mark className="px-2 text-white bg-green-400 rounded">author</mark>
				or
				<mark className="px-2 text-white bg-green-400 rounded">category</mark>
				or
				<mark className="px-2 text-white bg-green-400 rounded">title</mark>
			</h2>
			<form className="flex place-content-evenly pt-6 align-center">
				<label htmlFor="category">
					<span className="text-2xl font-bold tracking-tight text-green-900">
						Category
					</span>
					<select
						className="drop-shadow-lg bg-green-100 focus:ring-4 focus:outline-none focus:ring-green-600 font-medium rounded-lg text-sm px-5 py-1 ml-2 text-center inline-flex items-center"
						id="category"
						value={selectedCategory}
						onChange={(e) => setSelectedCategory(e.target.value)}
					>
						<option value="">All Categories</option>
						{CATEGORIES.map((category) => (
							<option key={category} value={category}>
								{category}
							</option>
						))}
					</select>
				</label>

				<label htmlFor="author">
					<span className="text-2xl font-bold tracking-tight text-green-900">
						Author
					</span>
					<select
						className="drop-shadow-lg bg-green-100 focus:ring-4 focus:outline-none focus:ring-green-600 font-medium rounded-lg text-sm px-5 py-1 ml-2 text-center inline-flex items-center"
						id="author"
						value={selectedAuthor}
						onChange={(e) => setSelectedAuthor(e.target.value)}
					>
						<option value="">All Authors</option>
						{AUTHORS.map((author) => (
							<option key={author} value={author}>
								{author}
							</option>
						))}
					</select>
				</label>

				<label htmlFor="title">
					<span className="text-2xl font-bold tracking-tight text-green-900">
						Title
					</span>
					<input
						className="drop-shadow-lg bg-green-100 focus:ring-4 focus:outline-none focus:ring-green-600 font-medium rounded-lg text-sm px-5 py-1 ml-2 text-center inline-flex items-center"
						type="text"
						id="title"
						value={selectedTitle}
						placeholder="Enter the title of the blog"
						onChange={(e) => setSelectedTitle(e.target.value)}
					/>
				</label>

				<button
					type="button"
					className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
					onClick={() =>
						onSearchButtonClick(selectedCategory, selectedAuthor, selectedTitle)
					}
				>
					Search
				</button>
			</form>
		</div>
	);
};
