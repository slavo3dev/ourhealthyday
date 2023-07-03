import { FC, useState } from "react";
import { IBlogProps } from "@lib/types";


export const SearchComponent: FC = () => { 
    const [query, setQuery] = useState("");

    return (
        <>
        <div className="flex items-center translate-y-[670px] translate-x-[-25px]">
            <div className="flex border border-purple-200 rounded">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search blog posts here..."
                />
                <button className="px-4 text-white bg-yellow-500 border-l rounded ">
                    Search
                </button>
            </div>
        </div>
        </>
    );
}
