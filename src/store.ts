import { configureStore } from "@reduxjs/toolkit";
import addProgressSlice from './context/Features/addProgressSlice';



export const store = configureStore({
    reducer: {
        progressCourse: addProgressSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch