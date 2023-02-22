import { createSlice } from "@reduxjs/toolkit";

export const translationsSlice   = createSlice({
    name: 'translations',
    initialState: {
        translationsArray: []
    },
    reducers:{
        addTranslation: (state, payload) =>{
            state.translationsArray.push(payload)
        }
    }
})

export const {addTranslation} = translationsSlice.actions;

export default translationsSlice.reducer;