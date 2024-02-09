import React, { useState } from "react";
import "./incremental-field.scoped.scss";

export default function IncrementalField({size}) {
  const [count, setCount] = useState(0); 

  function increment() {
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1); 
      } else {
        return (prevCount = 0);
      }
    });
  }

  return (
    <div className="incremental-field" data-size={size}>
      <button onClick={decrement}>-</button>
      <span className="output">{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}