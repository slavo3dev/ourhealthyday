import { FC } from "react";
import { CATEGORIES } from "@lib/constants";

export const CategoryFilter: FC = ({ setCurrentCategory, setShowForm }: any) => {
    const handleOnClose = () => {
      setShowForm(true);
    };
    return (
      <aside>
        <ul className="flex w-full">
          <li> {/*className="category"*/}
            <button
              className="btn btn-all-categories"
              onClick={() => setCurrentCategory("all")}
            >
              All
            </button>
          </li>
          {CATEGORIES.map((cat: any) => (
            <li key={cat.name} className="category">
              <button
                className="btn btn-category"
                style={{ backgroundColor: cat.color }}
                onClick={() => setCurrentCategory(cat.name)}
              >
                {cat.name}
              </button>
            </li>
          ))}
        </ul>
        
        
      </aside>
    );
  }