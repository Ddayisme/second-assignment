import {configureStore} from "@reduxjs/toolkit"
import translationsReducer from "./translationsSlice"

export default configureStore({
    reducer:{
        translationHistory: translationsReducer
    }
})