"use client";
import { useCounter } from "@/store/CounterContext";

const ComponentC = () => {
  const [count, setCount] = useCounter();
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <p>Component C</p>
      <p>{count}</p>
      <button
        onClick={increment}
        className="border border-solid border-gray-300 rounded-sm py-0.5 px-1"
      >
        Add
      </button>
    </div>
  );
};

export default ComponentC;
