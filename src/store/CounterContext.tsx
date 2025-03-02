"use client";
import {
  Dispatch,
  ReactNode,
  Reducer,
  SetStateAction,
  createContext,
  useContext,
  useReducer,
} from "react";
import { CounterReducer, Counter_initialstate } from "./CounterReducerConfig";
import { CounterReducerAction } from "@/types/statetypes";

const CounterContext = createContext<
  [number, Dispatch<CounterReducerAction>] | undefined
>(undefined);

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer<Reducer<number, CounterReducerAction>>(
    CounterReducer,
    Counter_initialstate
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
