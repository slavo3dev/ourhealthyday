import { FC } from "react";
import { CATEGORIES } from "@lib/constants";

export const CategoryFilter: FC = ({ setCurrentCategory, setShowForm }: any) => {
    const handleOnClose = () => {
      setShowForm(true);
    };
    return (
      <aside>
        <ul className="flex flex-row items-center space-x-8 translate-y-[-100px] translate-x-[220px] ul-gap">
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