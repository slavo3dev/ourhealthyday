import React, { FC, useState } from "react";

export const IncrementCounter: FC = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="bg-slate-400 py-10">
        <div className="h-10">
            <h1>Counter: {count}</h1>
        </div>
        <div className="h-10">
          <button
            className="bg-green-400 w-20"
            onClick={handleIncrement}
          >
            +
          </button>
          <button
            className="bg-red-500 w-20"
            onClick={handleDecrement}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
};
