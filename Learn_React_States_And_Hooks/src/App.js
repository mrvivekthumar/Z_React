import React, { useState } from "react";

function App() {
  const [countInParent, setCountInParent] = useState(0);

  function updateCountInParent(count) {
    setCountInParent(count);
  }

  function uploadData() {
    console.log("I Will Start Uploading Data...");
  }

  return (
    <div>

      {/* components rendering */}

      {/* <p>Inside The Parent : {countInParent}</p>
      <Child1 onCountUpdate={updateCountInParent} />
      <Child2 countFromParent={countInParent} uploadData={uploadData} /> */}

      {/* <Counter /> */}
      {/* <Fruits /> */}

      {/* Notes and SingleNote is together component */}

      {/* <Notes />
      <SingleNote /> */}

      {/* 19  */}

      {/* <Mounting_Life_Cycle /> */}

      {/* NewsApp and News is same */}

      {/* <NewsApp />
      <News /> */}

      {/* <Selection /> */}
      {/* <UseEffectHook /> */}
    </div>
  );
}

export default App;
