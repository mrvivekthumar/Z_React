import React, { useState } from "react";
import SingleNote from "./SingleNote";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [curNote, setCurNote] = useState("");

  const ulStyle = {
    listStyle: "none",
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "20px",
  };

  function updateCurNote(event) {
    setCurNote(event.target.value);
  }

  function addNote(event) {
    const newNotesArray = [...notes, curNote];
    setNotes(newNotesArray);
  }

  return (
    <>
      <input onChange={updateCurNote} type="text" />
      <button onClick={addNote}>Submit</button>
      <ul style={ulStyle}>
        {notes.map((note, index) => {
          return (
            <li key={index}>
              <SingleNote note={note} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

// Different Example

// const [car, setCar] = useState({
//   mode: "innova",
//   year: 2018,
//   color: "white",
// });

// setCar({ ...car, color: "red" });
export default Notes;
