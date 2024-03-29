/* eslint-disable indent */
import { FC } from "react";
import { CATEGORIES } from "@lib/constants";
import { Category } from "@lib/types";
import { CategoryFilterProps } from "@lib/types";
export const CategoryFilter: FC<CategoryFilterProps> = ({
  setCurrentCategory,
}) => {
  // const handleOnClose = () => {
  // 	setShowForm(true);
  // };
  return (
    <div>
      <ul className="flex cat-buttons mx-auto max-w-screen-xl width-full pt-8">
        <li className="hover:bg-blue-100">
          {" "}
          {/*className="category"*/}
          <button
            className=" bg-white text-teal-500  drop-shadow-md font-bold py-3 px-4 mt-3 rounded m-3"
            onClick={() => setCurrentCategory("all")}
          >
            All
          </button>
        </li>
        {CATEGORIES.map((cat: Category) => (
          <li className="hover:bg-blue-100" key={cat.name}>
            <button
              className="hover:bg-blue-100 text-teal-500  drop-shadow-md font-bold py-3 px-4 mt-3 rounded m-3"
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
