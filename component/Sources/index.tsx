/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState, useEffect } from "react";
import supabase from "@lib/supabase";
import { NewResourceFrom } from "component/NewResourceFrom";
import { CategoryFilter } from "component/CategoryFilter";
import { Loader } from "component/Loader";
import { FactList } from "component/FactList";

export const FunctionFactList: FC = () => {
	const [showForm, setShowForm] = useState<boolean>(false);
	const [facts, setFacts] = useState<any>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [currentCategory, setCurrentCategory] =
    useState<string>("all");

	useEffect(
		function () {
			async function getSources() {
				setIsLoading(true);
				let query = supabase.from("facts").select("*");

				if (currentCategory !== "all")
					query = query.eq("category", currentCategory);

				const { data: facts, error }: any = await query
					.order("like", { ascending: false })
					.limit(1000);

				if (!error) setFacts(facts);
				else alert("There was a problem getting data, please try again");
				setIsLoading(false);
			} getSources();
		}, [currentCategory, showForm],
	);

	const handleOnClose = () => {setShowForm(true);};

	return (
		<section className="mx-auto container">
			<div className="w-full px-6 py-3 ">
				<div className="flex items-center justify-between text-blue-gray-900">
					<h3 className="mr-4 cursor-pointer py-1.3 text-black text-3xl sources-heading">
            Share: Supplements, Books, Podcasts, Apps, Post or any Sources & Fact
					</h3>
					<button className="hover:font-bold bg-white text-black border-2 border-teal-500 py-2 px-4 rounded-lg w-auto add-button" onClick={handleOnClose}>
					Share Source</button>
				</div>
			</div>
			<main>
				<CategoryFilter setCurrentCategory={setCurrentCategory} />
				{isLoading ? (
					<Loader />
				) : (
					<FactList facts={facts} setFacts={setFacts} />
				)}
				{showForm && (
					<NewResourceFrom
						setSources={setFacts}
						setShowForm={setShowForm}
					/>
				)}
			</main>
		</section>
	);
};
