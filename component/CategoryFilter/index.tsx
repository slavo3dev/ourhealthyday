import { FC } from "react";
import { CATEGORIES } from "@lib/constants";

export const CategoryFilter: FC<any> = ({ setCurrentCategory, setShowForm } ) => {
	// const handleOnClose = () => {
	// 	setShowForm(true);
	// };
	return (
		<div className="ml-28 div-cat-buttons">
			<ul className="flex cat-buttons mx-auto max-w-screen-xl width-full" >
				<li>
					{" "}
					{/*className="category"*/}
					<button
						className="hover:bg-blue-100 bg-teal-500 text-white font-bold py-3 px-4 mt-3 rounded m-3"
						onClick={() => setCurrentCategory("all")}
					>
            All
					</button>
				</li>
				{CATEGORIES.map((cat: any) => (
					<li key={cat.name}>
						<button
							className="hover:bg-blue-100 bg-teal-500 text-white font-bold py-3 px-4 mt-3 rounded m-3"
							style={{ backgroundColor: cat.color }}
							onClick={() => setCurrentCategory(cat.name)}
						>
							{cat.name}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};