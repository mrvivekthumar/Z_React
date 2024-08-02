import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setMessage } from "../redux/slices/messageSlice";

function Childe1() {
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const inputTextValue = inputRef.current.value;
    dispatch(setMessage(inputTextValue));
  }

  return (
    <div style={{
      color: 'blue',
      backgroundColor: 'yellow',
      padding: '10px',
      borderRadius: '5px',
    }}>
      <form onSubmit={handleSubmit}>
        <p>Inside Child 1</p>
        <input type="text" ref={inputRef} />
        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default Childe1;
