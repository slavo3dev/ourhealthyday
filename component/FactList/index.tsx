import { FC, Key } from "react";
import { Fact } from "component/Fact";

export const FactList: FC = ({ facts, setFacts }: any) => {
  if (facts.length === 0)
    return (
      <p className="message">
        No facts for this category yet! Create the first one ✌️
      </p>
    );

  return (
    <section className="mx-auto max-w-screen-xl px-6 py-3 bg-gradient-to-r from-green-200 to-teal-200 ... rounded-lg mb-8">
      <ul className="grid md:grid-cols-4 gap-4 grid-cols-2 fact-list-grid">
        {facts.map((fact: { id: Key | null | undefined }) => (
          <Fact key={fact.id} fact={fact} setFacts={setFacts} />
        ))}
      </ul>
      <p style={{ color: "#1d1e18" }}>
        There are {facts.length} source. Add your own source!
      </p>
    </section>
  );
};
