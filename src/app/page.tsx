'use client';
import { useCounter } from "@/store/CounterContext";
import ComponentA from "../components/ComponentA";

export default function Home() {
  const [count, countDispatch] = useCounter();

  return (
    <div className="text-center">
      <h1 className="font-bold">Learn useContext/useReducer in Next.js 13</h1>
      <p>Count: {}</p>
      <ComponentA />
    </div>
  );
}
