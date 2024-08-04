import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "noteSlice",
  initialState: {
    notes: [],
  },
  reducers: {
    createNote: (state, action) => {
      // Previous time we done using this way
      // state.notes = [...state.notes,action.payload]

      state.notes.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});

export default notesSlice.reducer;

export const { createNote, deleteNote } = notesSlice.actions;
