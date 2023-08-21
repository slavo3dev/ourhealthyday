import { FC, useState, useEffect } from "react";

interface CategorySelectionProps {
  onCategoryChange: (category: string) => void;
  onAuthorChange: (author: string) => void;
}

export const CategorySelection: FC<CategorySelectionProps> = ({
	onCategoryChange,
	onAuthorChange
}) => {
	const CATEGORIES = ["Mushroom World"];
	const AUTHORS = ["Slavo"];

	const [selectedCategory, setSelectedCategory] = useState("");
	const [selectedAuthor, setSelectedAuthor] = useState("");

	useEffect(() => {
		requestCategories();
	}, [selectedCategory, selectedAuthor]);

	async function requestCategories() {
		const res = await fetch(
			`https://api-us-west-2.hygraph.com/v2/cll2csb0x0ic001un2jzvdvho/master?categories=${selectedCategory}&author=${selectedAuthor}`
		);
		const json = await res.json();
		setSelectedCategory(json.categories);
		setSelectedAuthor(json.author);
	}

	return (
		<div className="flex justify-center bg-green-200">
			<h2>Please select the category or author</h2>
			<form className="flex space-x-4">
				<label htmlFor="category">
          Category
					<select
						id="category"
						value={selectedCategory}
						onChange={(e) => {
							setSelectedCategory(e.target.value);
							onCategoryChange(e.target.value);
						}}
					>
						<option value="">All Categories</option>
						{CATEGORIES.map(category => (
							<option key={category} value={category}>
								{category}
							</option>
						))}
					</select>
				</label>

				<label htmlFor="author">
          Author
					<select
						id="author"
						value={selectedAuthor}
						onChange={(e) => {
							setSelectedAuthor(e.target.value);
							onAuthorChange(e.target.value);
						}}
					>
						<option value="">All Authors</option>
						{AUTHORS.map(author => (
							<option key={author} value={author}>
								{author}
							</option>
						))}
					</select>
				</label>
			</form>
		</div>
	);
};