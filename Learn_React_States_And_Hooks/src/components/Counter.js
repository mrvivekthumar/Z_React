import React, { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  function updateCount() {
    setCount(count + 1);
    console.log("Count is ", count);
  }

  return (
    <div>
      <p>The Value Of Count Is : {count}</p>
      <button onClick={updateCount}>Increament</button>
    </div>
  );
}

export default Counter;
