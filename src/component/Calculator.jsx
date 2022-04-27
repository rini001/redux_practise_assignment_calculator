import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, divide, multiply, subtract } from "../redux/action";

export const Calculator = () => {
  const [value, setValue] = useState(0);
//   console.log(typeof value)
  const dispatch = useDispatch();
  const handlechange = (e) => {
    setValue(Number(e.target.value));
  };
  const count = useSelector((state) => state.count);

  return (
    <div>
        <h1>{count}</h1>
      <input type="text" value={value} onChange={handlechange} />
      <button
        onClick={() => {
          dispatch(add(value));
        }}
      >
        ADD
      </button>
      <button
        onClick={() => {
          dispatch(subtract(value));
        }}
      >
        SUBTRACT
      </button>
      <button
        onClick={() => {
          dispatch(multiply(value));
        }}
      >
        MULTIPLY
      </button>
      <button
        onClick={() => {
          dispatch(divide(value));
        }}
      >
        DIVIDE
      </button>
    </div>
  );
};
