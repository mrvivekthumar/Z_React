import React, { useEffect, useRef, useState } from "react";

function Mounting_Life_Cycle() {

  let normalCounter = 0;
  const refCounter = useRef(0);
  const [counter, setCounter] = useState(0);


  useEffect(() => {
    console.log("normal Counter ", normalCounter);
    console.log("Ref Counter ", refCounter);
    console.log("state Counter", counter);

    return () => {
      console.log("unmounting here");
    };
  });

  function increment() {
    setCounter(counter + 1);
    normalCounter = normalCounter + 1;
    refCounter.current = refCounter.current + 1;
  }

  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Mounting_Life_Cycle;
