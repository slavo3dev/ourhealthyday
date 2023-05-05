/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, Key } from "react";
import { NewResourceFrom } from "../component/Modal/NewResourceFrom";
import { CATEGORIES } from "../lib/constants";
import supabase from "../lib/supabase";
import React from "react";
import type { NextPage } from "next";


const Home: NextPage = () => {
	const [ showForm, setShowForm ] = useState<boolean>( false );
	const [facts, setFacts] = useState<any[]>([]);
	const [ isLoading, setIsLoading] = useState<boolean>(false);
	const [ currentCategory, setCurrentCategory ] = useState<string>( "all" );

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
				else alert("There was a problem getting data");
				setIsLoading(false);
			}
			getSources();
		},
		[currentCategory, showForm ]
	);
 

	return (
		<>
			<Header showForm={ showForm } setShowForm={ setShowForm } />
			{ showForm && <NewResourceFrom setSources={ setFacts } setShowForm={ setShowForm } /> }
			
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
	const [facts, setFacts] = useState<any[]>([]);

	const handleOnClose = () => { setShowForm( true ); };

	return (
		
		<header className='header'>
			<div className='logo'>
				<img src='/logo/logo.png' height='68' width='68' alt={appTitle} />
				<h1>{appTitle}</h1>
			</div>

			<div className="w-full flex items-center justify-center pb-5" >
				<button className="hover:bg-blue-100 bg-blue-500 text-white hover:text-red-500 font-bold py-2 px-4 rounded w-1/2" onClick={ handleOnClose }>Add Source</button>
			</div>
			{/* { showForm && <NewResourceFrom setSources={ setFacts } setShowForm={ setShowForm } /> } */}
			
			{/*<button
				className='btn btn-large btn-open'
				onClick={() => setShowForm((show: any) => !show)}
			>
				{showForm ? "Close" : "Share Source"}
			</button> */}
		</header>
	);
}

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
