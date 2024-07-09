import React, { useState } from "react";

// function Fruits() {
//   const [fruits, setFruit] = useState("Apple");
//   return (
//     <>
//       <p>This fruit is : {fruits}</p>
//       <button onClick={() => setFruit("Pappaya")}>Pappaya</button>
//       <button onClick={() => setFruit("Mango")}>Mango</button>
//       <button onClick={() => setFruit("Banana")}>Banana</button>
//     </>
//   );
// }

function Fruits() {
  const [fruit, setFruit] = useState("Apple");
  const [inputText, setInputText] = useState("");

  const updateFruit = () => {
    setFruit(inputText);
  };

  function updateInputText(event) {
    const curInputValue = event.target.value;
    setInputText(curInputValue);
  }

  return (
    <>
      <p>This fruit is :{fruit}</p>
      <input type="text" onChange={updateInputText} />
      <button onClick={() => updateFruit()}>Submit</button>
    </>
  );
}

export default Fruits;
