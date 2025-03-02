import { CounterReducerAction } from "@/types/statetypes";

export const Counter_initialstate = 100;

export const CounterReducer = (
  state: number,
  action: CounterReducerAction
): number => {
  switch (action.type) {
    case "increase": {
      return state + 1;
    }
    case "decrease": {
      return state - 1;
    }
    case "add": {
      if (!action.payload) {
        console.log("Counter action of add require action.payload.");
        return state;
      } else if (typeof action.payload !== "number") {
        console.log("In using counter action of add, typeof action.payload must be 'number'.");
        return state;
      }
      return state + action.payload;
    }
    default: {
      console.log(`Unknown action type: ${action.type}`);
      return state;
    }
  }
};
