import { DECREMENT, DECREMENT_5, INCREMENT, INCREMENT_5 } from "./action/type";

const CounterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case INCREMENT_5:
      return {
        ...state,
        count: state.count + 5,
      };
    case DECREMENT_5:
      return {
        ...state,
        count: state.count - 5,
      };
    case 'RESET':
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};

export default CounterReducer;
