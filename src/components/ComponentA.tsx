"use client";
import { useCounter } from "@/store/CounterContext";
import ComponentB from "./ComponentB";
import { ChangeEvent, SyntheticEvent, useState } from "react";

const ComponentA = () => {
  const [count, countDispatch] = useCounter();
  const [value, setValue] = useState<string>();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const valueToNum = Number(value);
    if (Number.isNaN(valueToNum)) {
      alert("数字で入力して下さい");
      return;
    }
    countDispatch({ type: "add", payload: valueToNum });
  };

  return (
    <div>
      <p>Component A</p>
      <form onSubmit={handleSubmit}>
        <input type="text" className="border" onChange={(e) => setValue(e.target.value)} />
        <button
          type="submit"
          className="border border-solid border-gray-300 rounded-sm px-1 mx-1"
        >
          Add
        </button>
      </form>
      <ComponentB />
    </div>
  );
};

export default ComponentA;
