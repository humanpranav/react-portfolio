import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [number, setNumber] = useState(99);
  const [declaration] = useState("Current Count: ");

  const decrementNumber = () => {
    setNumber((previousNumber) => previousNumber - 1);
  };
  const incrementNumber = () => {
    setNumber((previousNumber) => previousNumber + 1);
  };

  return (
    <div className="count-buttons">
      <button type="button" class="btn btn-danger" onClick={decrementNumber}>
        Decrement
      </button>
      <span>
        {declaration}
        {number}
      </span>
      <button type="button" class="btn btn-success" onClick={incrementNumber}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
