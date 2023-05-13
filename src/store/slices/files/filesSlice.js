import { createSlice } from "@reduxjs/toolkit";

export const filesSlice = createSlice({
  name: 'files',
  initialState: {
    files: [],
    isLoading: false
  },
  reducers: {
    loadFiles: (state) => {
      state.isLoading = true;
    },
    setFiles: (state, action) => {
      state.isLoading = false;
      state.files = action.payload.files;
    }
  }
})

export const { loadFiles, setFiles } = filesSlice.actions;
