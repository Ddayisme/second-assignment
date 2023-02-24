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
    removeOverTenHistory: (state, payload) => {
      while (state.translationsArray.length > 10) {
        state.translationsArray.shift();
      }
    },
  },
});

export const { addTranslation, removeTranslations, removeOverTenHistory } =
  translationsSlice.actions;

export default translationsSlice.reducer;
