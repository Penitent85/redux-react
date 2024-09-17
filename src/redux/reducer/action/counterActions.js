import { DECREMENT, DECREMENT_5, INCREMENT, INCREMENT_5, RESET } from './type';

const increment = () => {
  return {
    type: INCREMENT,
  };
};
const decrement = () => {
  return {
    type: DECREMENT,
  };
};
const increment5 = () => {
  return {
    type: INCREMENT_5,
  };
};
const decrement5 = () => {
  return {
    type: DECREMENT_5,
  };
};

const reset = () => {
  return {
    type: RESET,
  };
};
export { increment, decrement, reset , increment5 , decrement5};
