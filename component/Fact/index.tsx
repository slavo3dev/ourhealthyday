/* eslint-disable indent */
import { FC, useState } from "react";
import supabase from "@lib/supabase";
import { CATEGORIES } from "@lib/constants";
import Link from "next/link";

export const Fact: FC<any> = ({ fact, setFacts }: any) => {
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
    <li className="max-w-sm rounded overflow-hidden shadow-lg bg-gradient-to-b from-white to-blue-100 p-2">
      <p>
        {badSource ? (
          <span className="px-2 py-2">[ ⛔️ BAD SOURCE ]</span>
        ) : null}
        {fact.text}
        <Link
          className="source italic"
          href={fact.source}
          target="_blank"
        >
          {" "}
          (Source)
        </Link>
      </p>

      {/*<span
                className='tag'
                style={{ backgroundColor: CATEGORIES.find((cat: any) => cat?.name.toLowerCase() === fact?.category.toLowerCase()).color, padding: "0.4rem"
                }}
              >
                {fact.category}
              </span>*/}

      <span
        className="tag italic font-bold"
        style={{ padding: "0.4rem" }}
      >
        {fact.category &&
        CATEGORIES.find(
          (cat: any) =>
            cat?.name?.toLowerCase() === fact?.category.toLowerCase(),
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
};
