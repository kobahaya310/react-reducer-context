export type CounterReducerAction = {
  type: "increase" | "decrease" | "add";
  payload?: number;
};

export type CounterReducerType = (
  state: number,
  action: CounterReducerAction
) => number | void;
