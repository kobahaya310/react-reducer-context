export type CounterReducerAction = {
  type: "increase" | "decrease" | "add";
  payload?: number;
};
