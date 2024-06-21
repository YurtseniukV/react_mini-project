import {configureStore} from "@reduxjs/toolkit";
import {genresReducer} from "./slices/genreSlice";
import {moviesReducer} from "./slices/moviesSlice";


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export const store = configureStore({
    reducer: {
        moviesSlice: moviesReducer,
        genresSlice: genresReducer,
    },
});
