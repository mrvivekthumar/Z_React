import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "noteSlice",
  initialState: {
    notes: [],
  },
  reducers: {
    creatNote: (state, action) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});

export default notesSlice.reducer;

export const { createNote, deleteNote } = notesSlice.actions;
