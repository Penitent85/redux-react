import { DECREMENT, DECREMENT_5, DECREMENT_BY_VALUE, INCREMENT, INCREMENT_5, INCREMENT_BY_VALUE, RESET } from './type';

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
const incrementByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
}
const decrementByValue = (value) => {
  return {
    type: DECREMENT_BY_VALUE,
    payload: value,
  };
}

const reset = () => {
  return {
    type: RESET,
  };
};
export { increment, decrement, reset , increment5 , decrement5 , incrementByValue , decrementByValue};
