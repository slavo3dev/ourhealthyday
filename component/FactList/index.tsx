import { FC, Key } from "react";
import { Fact } from "component/Fact";


// fact:Key | null | undefined
export const FactList: FC<any> = ({ facts, setFacts }) => {
	if (facts.length === 0)
		return (
			<p className="message">
        No facts for this category yet! Create the first one ✌️
			</p>
		);

	return (
		<section className="mx-auto my-8 max-w-screen-xl px-6 py-3 bg-white border-2 border-teal-500 rounded-lg drop-shadow-2xl">
			<ul className="grid md:grid-cols-4 gap-4 grid-cols-2 fact-list-grid">
				{ facts.map( ( fact: any) => (
					<Fact key={fact.id} fact={fact} setFacts={setFacts} />
				))}
			</ul>
			<p className="pt-8 text-1xl" style={{ color: "#1d1e18" }}>
        There are {facts.length} source. Add your own source!
			</p>
		</section>
	);
};
