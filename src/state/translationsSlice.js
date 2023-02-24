import { createSlice } from "@reduxjs/toolkit";

export const translationsSlice = createSlice({
  name: "translations",
  initialState: {
    translationsArray: [],
  },
  reducers: {
    addTranslation: (state, payload) => {
      state.translationsArray.push(payload);
    },
    removeTranslations: (state, payload) => {
      state.translationsArray = [];
    },
  },
});

export const { addTranslation, removeTranslations } = translationsSlice.actions;

export default translationsSlice.reducer;
