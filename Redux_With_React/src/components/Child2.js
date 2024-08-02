import React from "react";
import { useSelector } from "react-redux";

function Child2() {

  const message = useSelector((state) => state.messageReducer.message);

  return <div style={{
    color: 'blue',
    backgroundColor: 'lightgray',
    padding: '10px',
    borderRadius: '5px',
  }}>
    <p>Inside child 2</p>
    <p>The Data from Child - 1 = {message}</p>
  </div>;
}

export default Child2;
