import React, { useEffect, useState } from "react";

function UseEffectHook() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("default");

  useEffect(() => {
    console.log(counter, name, "counter & names is updated");
  }, [counter][name]);

  useEffect((e) => {
    console.log(name, "name is updated");
  }, [name]);

  useEffect(() => {
    console.log("first time Mounted with empty dependancies");
  }, []);

  useEffect(() => {
    console.log("first time Mounted with No dependancies");
  });

  return (
    <div>
      <p>{counter}</p>
      <input type="text" onChange={(e) =>
        setName(e.target.value)} />
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default UseEffectHook;
