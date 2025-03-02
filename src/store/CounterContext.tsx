"use client";
import {
  Dispatch,
  ReactNode,
  Reducer,
  createContext,
  useContext,
  useReducer,
} from "react";
import { counterReducer, counterInitialstate } from "./counterReducer";
import { CounterReducerAction } from "@/types/types";

const CounterContext = createContext<
  [number, Dispatch<CounterReducerAction>] | undefined
>(undefined);

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer<Reducer<number, CounterReducerAction>>(
    counterReducer,
    counterInitialstate
  );
  return (
    <CounterContext.Provider value={[state, dispatch]}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (context === undefined)
    throw new Error("useCounter must be used in Provider.");
  return context;
};
