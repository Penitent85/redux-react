import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  reset,
  increment5,
  decrement5,
} from '../redux/reducer/action/counterActions';

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleIncrement5 = () => {
    dispatch(increment5());
  };
  const handleDecrement5 = () => {
    dispatch(decrement5());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <div className='container'>
      <div>
        <h1>Counter</h1>
        <h2>{count}</h2>
      </div>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement5}>Increment 5</button>
        <button onClick={handleDecrement5}>Decrement 5</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
export default Counter;
