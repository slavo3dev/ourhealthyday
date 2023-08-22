import { FC, useState, useEffect } from "react";

interface CategorySelectionProps {
  onCategoryChange: (category: string) => void;
  onAuthorChange: (author: string) => void;
}

export const CategorySelection: FC<CategorySelectionProps> = ({
	onCategoryChange,
	onAuthorChange,
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
			`https://api-us-west-2.hygraph.com/v2/cll2csb0x0ic001un2jzvdvho/master?categories=${selectedCategory}&author=${selectedAuthor}`,
		);
		const json = await res.json();
		setSelectedCategory(json.categories);
		setSelectedAuthor(json.author);
	}

	return (
		<div className="bg-gradient-to-t from-green-400 to-green-200  my-8 h-32  drop-shadow-lg rounded-lg">
			<h2 className="text-center pt-3 text-xl font-bold tracking-tight text-green-900 drop-shadow-lg">
        Search posts by{" "}
				<mark className="px-2 text-white bg-green-400 rounded">
          author
				</mark>{" "}
        or{" "}
				<mark className="px-2 text-white bg-green-400 rounded">
          category
				</mark>
			</h2>
			<form className="flex place-content-evenly pt-6">
				<label htmlFor="category">
					<span className="text-2xl font-bold leading-none tracking-tight text-green-900">
            Category
					</span>
					<select
						className="drop-shadow-lg bg-green-100 focus:ring-4 focus:outline-none focus:ring-green-600 font-medium rounded-lg text-sm px-5 py-1 ml-2 text-center inline-flex items-center align-top"
						id="category"
						value={selectedCategory}
						onChange={(e) => {
							setSelectedCategory(e.target.value);
							onCategoryChange(e.target.value);
						}}
					>
						<option  value="">All Categories</option>
						{CATEGORIES.map((category) => (
							<option key={category} value={category}>
								{category}
							</option>
						))}
					</select>
				</label>

				<label htmlFor="author">
					<span className="text-2xl font-bold leading-none tracking-tight text-green-900">
            Author
					</span>
					<select
						className="drop-shadow-lg bg-green-100 focus:ring-4 focus:outline-none focus:ring-green-600 font-medium rounded-lg text-sm px-5 py-1 ml-2 text-center inline-flex items-center align-top"
						id="author"
						value={selectedAuthor}
						onChange={(e) => {
							setSelectedAuthor(e.target.value);
							onAuthorChange(e.target.value);
						}}
					>
						<option value="">All Authors</option>
						{AUTHORS.map((author) => (
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