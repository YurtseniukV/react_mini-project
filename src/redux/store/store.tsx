
import {configureStore} from "@reduxjs/toolkit";
import {moviesReducer} from "../slices/moviesSlice";
import { genresReducer } from '../slices/genreSlice';


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export const store = configureStore({
    reducer: {
        moviesSlice: moviesReducer,
        genresSlice: genresReducer,
    },
});



