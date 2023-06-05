<<<<<<< HEAD
import { FC } from "react";
import { TitleProps } from "@/lib/types";

export const Title: FC<TitleProps> = ( { title } ) =>
{
    
	return (
		<div className="w-full text-center p-6">
			<h1
				className="text-transparent bg-clip-text bg-gradient-to-r to-green-600 from-green-400 mb-4 text-3xl font-extrabold md:text-5xl lg:text-6xl text-shadow-md hover:text-green-700 transition duration-500 ease-in-out transform hover:-translate-y-1" style={{ textShadow: "0 0 1px" }}>{ title }</h1>
		</div>
	);
};
||||||| abbae38
=======
import { FC } from "react";
import { TitleProps } from "@lib/types";

export const Title: FC<TitleProps> = ({ title }) => {
    return (
      <div className="w-full text-center p-6">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-4 text-3xl font-extrabold md:text-5xl lg:text-6xl text-green-700 hover:text-green-800 transition duration-500 ease-in-out transform hover:-translate-y-1" style={{ textShadow: "0 0 1px" }}>{title}</h1>
      </div>
    );
  };
  
  
>>>>>>> title-component
