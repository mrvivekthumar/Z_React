import React from "react";

function Child2(props) {
  return (
    <div>
      Count Inside Child 2 : {props.countFromParent}
      <button onClick={props.uploadData}>Data</button>
    </div>
  );
}

export default Child2;
