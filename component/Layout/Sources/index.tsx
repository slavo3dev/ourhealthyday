import { FC, useState, useEffect } from "react";
import { CATEGORIES } from "@lib/constants";
import supabase from "@lib/supabase";
import { NewResourceFrom } from "component/Layout/NewResourceFrom";

export const FunctionFactList: FC = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [facts, setFacts] = useState<any[]>([]);
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
        else alert("There was a problem getting data");
        setIsLoading(false);
      }
      getSources();
    },
    [currentCategory, showForm],
  );

  const handleOnClose = () => {
    setShowForm(true);
  };

  return (
    <section className="mx-auto container">
      <div className="mx-auto max-w-screen-xl px-6 py-3 bg-green-200 border-solid border-2 border-teal-800 rounded-full">
        <div className="flex items-center justify-between text-blue-gray-900">
          <h1 className="mr-4 cursor-pointer py-1.5 text-teal-800 text-3xl font-semibold">
            Learning Sources
          </h1>

          <button
            className="hover:bg-teal-100 bg-teal-500 text-white hover:text-red-500 font-bold py-2 px-4 rounded-lg w-1/4 "
            onClick={handleOnClose}
          >
            Add Source
          </button>
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

function Loader() {
  return <p className="message">Loading...</p>;
}

function CategoryFilter({ setCurrentCategory, setShowForm }: any) {
  const handleOnClose = () => {
    setShowForm(true);
  };
  return (
    <aside>
      <ul className="flex width-full mx-auto max-w-screen-xl px-6 py-3">
        <li>
          {" "}
          {/*className="category"*/}
          <button
            className="hover:bg-blue-100 bg-teal-500 text-white font-bold py-3 px-4 mt-3 rounded m-3"
            onClick={() => setCurrentCategory("all")}
          >
            All
          </button>
        </li>
        {CATEGORIES.map((cat: any) => (
          <li key={cat.name} className="">
            <button
              className="hover:bg-blue-100 bg-teal-500 text-white font-bold py-3 px-4 mt-3 rounded m-3"
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
      <p className="message">
        No facts for this category yet! Create the first one ✌️
      </p>
    );

  return (
    <section className="mx-auto max-w-screen-xl px-6 py-3 bg-gradient-to-r from-green-200 to-teal-200 ... rounded-lg mb-8">
      <ul className="grid md:grid-cols-4 gap-4 grid-cols-2">
        {facts.map((fact: { id: Key | null | undefined }) => (
          <Fact key={fact.id} fact={fact} setFacts={setFacts} />
        ))}
      </ul>
      <p style={{ color: "#1d1e18" }}>
        There are {facts.length} source. Add your own source!
      </p>
    </section>
  );
}

function Fact({ fact, setFacts }: any) {
  const [isUpdating, setIsUpdating] = useState(false);
  const badSource = fact.like + fact.exelent < fact.false;

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
        facts.map((f: { id: any }) =>
          f.id === fact.id ? updatedFact[0] : f,
        ),
      );
  }

  return (
    <li className="max-w-sm rounded overflow-hidden shadow-lg bg-blue-100 p-2 hover:bg-slate-100 transition-duration: 900ms">
      <p>
        {badSource ? (
          <span className="px-2 py-2">[ ⛔️ BAD SOURCE ]</span>
        ) : null}
        {fact.text}
        <a className="source" href={fact.source} target="_blank">
          (Source)
        </a>
      </p>

      {/*<span
              className='tag'
              style={{ backgroundColor: CATEGORIES.find((cat: any) => cat?.name.toLowerCase() === fact?.category.toLowerCase()).color, padding: "0.4rem"
              }}
            >
              {fact.category}
            </span>*/}

      <span className="tag" style={{ padding: "0.4rem" }}>
        {fact.category &&
        CATEGORIES.find(
          (cat: any) =>
            cat?.name.toLowerCase() === fact?.category.toLowerCase(),
        ) ? (
          <span
            style={{
              backgroundColor: CATEGORIES.find(
                (cat: any) =>
                  cat?.name.toLowerCase() ===
                  fact?.category.toLowerCase(),
              )?.color,
            }}
          >
            {fact.category}
          </span>
        ) : (
          <span>Category Not Found</span>
        )}
      </span>

      <div className="vote-buttons">
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
        <button
          onClick={() => handleVote("false")}
          disabled={isUpdating}
        >
          ⛔️ {fact.false}
        </button>
      </div>
    </li>
  );
}
