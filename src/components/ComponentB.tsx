'use client';
import { useCounter } from "@/store/CounterContext";
import ComponentC from "./ComponentC";

const ComponentB = () => {
  const [count, countDispatch] = useCounter();
  return (
    <div>
      <p>Component B</p>
      <button
        className="border border-solid border-gray-300 rounded-sm px-2"
        onClick={() => countDispatch({ type: "decrease" })}
      >
        -
      </button>
      <ComponentC />
    </div>
  );
};

export default ComponentB;
