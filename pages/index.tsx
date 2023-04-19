/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, Key } from "react";
import type { NextPage } from "next";
import supabase from "../lib/supabase";


const Home: NextPage = () => {
	const [showForm, setShowForm] = useState(false);
	const [facts, setFacts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [currentCategory, setCurrentCategory] = useState("all");

	useEffect(
		function () {
			async function getFacts() {
				setIsLoading(true);

				let query = supabase.from("facts").select("*");

				if (currentCategory !== "all")
					query = query.eq("category", currentCategory);

				const { data: facts, error }: any = await query
					.order("like", { ascending: false })
					.limit(1000);

				if (!error) setFacts(facts);
				else alert("There was a problem getting data");
				setIsLoading(false);
			}
			getFacts();
		},
		[currentCategory]
	);

	return (
		<>
			<Header showForm={showForm} setShowForm={setShowForm} />
			{showForm ? (
				<NewFactForm setFacts={setFacts} setShowForm={setShowForm} />
			) : null}

			<main className='main'>
				<CategoryFilter setCurrentCategory={setCurrentCategory} />

				{isLoading ? (
					<Loader />
				) : (
					<FactList facts={facts} setFacts={setFacts} />
				)}
			</main>
		</>
	);
};

function Loader() {
	return <p className='message'>Loading...</p>;
}

function Header({ showForm, setShowForm }: any) {
	const appTitle = "Improve Wellness & Fitness";

	return (
		<header className='header'>
			<div className='logo'>
				<img src='/logo/logo.png' height='68' width='68' alt={appTitle} />
				<h1>{appTitle}</h1>
			</div>

			<button
				className='btn btn-large btn-open'
				onClick={() => setShowForm((show: any) => !show)}
			>
				{showForm ? "Close" : "Share Source"}
			</button>
		</header>
	);
}

const CATEGORIES: any = [
	{ name: "Strength", color: "#3b82f6" },
	{ name: "Endurance", color: "#16a34a" },
	{ name: "Mental_Health", color: "#ef4444" },
	{ name: "Heart_Health", color: "#eab308" },
	{ name: "Mushroom_World", color: "#db2777" },
	{ name: "Workout", color: "#14b8a6" },
	{ name: "Science", color: "#f97316" },
	{ name: "News", color: "#8b5cf6" },
];

function isValidHttpUrl(string: string | URL) {
	let url;
	try {
		url = new URL(string);
	} catch (_) {
		return false;
	}
	return url.protocol === "http:" || url.protocol === "https:";
}

function NewFactForm({ setFacts, setShowForm }: any) {
	const [text, setText] = useState("");
	const [source, setSource] = useState("");
	const [category, setCategory] = useState("");
	const [isUploading, setIsUploading] = useState(false);
	const textLength = text.length;

	async function handleSubmit(e: { preventDefault: () => void; }) {
		// 1. Prevent browser reload
		e.preventDefault();
        
		console.log( "Submit Button", isValidHttpUrl(source) );

		if (text && isValidHttpUrl(source) && category && textLength <= 200) {
			try {
				setIsUploading(true);
				await axios.post( "api/createSource", {
					text, source, category: category.toUpperCase(), email
				} );
				setSources( ( sources: any ) => [ sources[ 0 ], ...sources ] );
                
				setTimeout(() => {
					setText("");
					setSource("");
					setCategory( "" );
					setIsUploading(false);
					setShowForm(false);
				}, 1500);
				
	
			} catch (error) {
				throw new Error("Something Went Wrong Message was not saved!!!");
            
			}

		}
	}

	const handleOnClose = () => { setShowForm(false); };
 

	return (
		<>
			<div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"></div>
			<div className="flex fixed inset-0 z-10 overflow-y-auto items-center justify-center">
				{ isUploading && <h3 style={ { color: "red", textDecoration: "underline", backgroundColor: "white", padding: "1rem" } }>Thank You so much for sharing this with the Comunity</h3> }
				<div className="w-full max-w-lg bg-gray-300 p-9 shadow-lg shadow-gray-100 transition-all rounded-lg sm:my-8 sm:w-full sm:max-w-lg">
					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Add URL Source
							</label>
							<input
								className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
								type="text"
								value={ source }
								placeholder='Question Title / Topic'
								onChange={ ( e ) => setSource( e.target.value ) }
								disabled={ isUploading }
							/>
							{(source.length === 0 ||  !isValidHttpUrl(source) ) ? <p className="text-red-500 text-xs italic">Please fill out this field or Add proper URL.</p> : "" }
						</div>
						<div className="w-full md:w-1/2 px-3">
							<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="select_category">
                            Category
							</label>
							<select
								className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="select_category"
								value={category}
								onChange={(e) => setCategory(e.target.value)}
								disabled={isUploading}
							>
								{ CATEGORIES.map( ( cat: any ) => (
									<option key={ cat.name } value={ cat.name }>
										{ cat.name }
									</option>
								) ) }
							</select>
						</div>
					</div>
					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full px-3">
							<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="question-topic">
                            Description About The Source
							</label>
							<textarea
								id="question-topic"
								rows={ 4 }
								className="block p-2.5 w-full text-sm bg-gray-200 border border-gray-200 text-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500"
								placeholder='Add Short Description About The Source...'
								value={ text }
								onChange={ ( e ) => setText( e.target.value ) }
								disabled={ isUploading } />
							<p className="text-gray-600 text-xs italic">You Have 250 words to describe your source - You are helping Comunity - </p>
						</div>
					</div>
					<div className="itmes-center content-center w-full">
						<button className="bg-gray-500 hover:bg-gray-900 text-white w-1/3 font-bold py-2 px-4 border border-red-700 rounded" disabled={ isUploading } onClick={handleSubmit}>
                        Submit
						</button>
						<button className="bg-red-100 hover:bg-gray-900 w-1/3 font-bold py-2 px-4 border border-red-300 rounded float-right" onClick={handleOnClose} >
                        Cancel
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

function CategoryFilter({ setCurrentCategory }: any) {
	return (
		<aside>
			<ul>
				<li className='category'>
					<button
						className='btn btn-all-categories'
						onClick={() => setCurrentCategory("all")}
					>
            All
					</button>
				</li>

				{CATEGORIES.map((cat: any) => (
					<li key={cat.name} className='category'>
						<button
							className='btn btn-category'
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

function FactList({ facts, setFacts }: any) {
	if (facts.length === 0)
		return (
			<p className='message'>
        No facts for this category yet! Create the first one ✌️
			</p>
		);

	return (
		<section>
			<ul className='facts-list'>
				{facts.map((fact: { id: Key | null | undefined; }) => (
					<Fact key={fact.id} fact={fact} setFacts={setFacts} />
				))}
			</ul>
			<p style={{ color: "#1d1e18"}}>There are {facts.length} source. Add your own source!</p>
		</section>
	);
}

function Fact({ fact, setFacts }: any) {
	const [isUpdating, setIsUpdating] = useState(false);
	const badSource =
    fact.like + fact.exelent < fact.false;

	async function handleVote(columnName: string) {
		setIsUpdating(true);
		const { data: updatedFact, error } = await supabase
			.from("facts")
			.update({ [columnName]: fact[columnName] + 1 })
			.eq("id", fact.id)
			.select();
		setIsUpdating(false);

		if (!error)
			setFacts((facts: any[]) =>
				facts.map((f: { id: any; }) => (f.id === fact.id ? updatedFact[0] : f))
			);
	}

	return (
		<li className='fact'>
			<p>
				{badSource ? <span className='badsource'>[ ⛔️ BAD SOURCE ]</span> : null}
				{fact.text}
				<a className='source' href={fact.source} target='_blank'>
          (Source)
				</a>
			</p>
			<span
				className='tag'
				style={{ backgroundColor: CATEGORIES.find((cat: any) => cat?.name === fact?.category).color, padding: "0.4rem"
				}}
			>
				{fact.category}
			</span>
			<div className='vote-buttons'>
				<button
					onClick={() => handleVote("like")}
					disabled={isUpdating}
				>
          👍 {fact.like}
				</button>
				<button
					onClick={() => handleVote("exelent")}
					disabled={isUpdating}
				>
          🤯 {fact.exelent}
				</button>
				<button onClick={() => handleVote("false")} disabled={isUpdating}>
          ⛔️ {fact.false}
				</button>
			</div>
		</li>
	);
}

export default Home;
