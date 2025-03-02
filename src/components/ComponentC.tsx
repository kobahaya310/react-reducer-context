"use client";
import { useCounter } from "@/store/CounterContext";

const ComponentC = () => {
  const [count, countDispatch] = useCounter();

  return (
    <div>
      <p>Component C</p>
      <button
        onClick={() => countDispatch({ type: "increase" })}
        className="border border-solid border-gray-300 rounded-sm px-2"
      >
        +
      </button>
    </div>
  );
};

export default ComponentC;
