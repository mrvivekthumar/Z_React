import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../../redux/slices/notesSlice";
import { nanoid } from "@reduxjs/toolkit";

function CreateNote() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      createNote({
        title,
        desc,
        id: nanoid(10),
      })
    );
  }

  return (
    <div>
      <form onClick={handleSubmit}>
        <input
          placeholder="title here"
          onChange={(e) => setTitle.target.value}
          type="text"
        />
        <input
          placeholder=" description here"
          onChange={(e) => setDesc.target.value}
          type="text"
        />
        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default CreateNote;
