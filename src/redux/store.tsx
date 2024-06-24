import {configureStore} from "@reduxjs/toolkit";
import {genresReducer} from "./slices/genreSlice";
import {moviesReducer} from "./slices/moviesSlice";
import {userReducer} from "./slices/userSlice";


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export const store = configureStore({
    reducer: {
        moviesSlice: moviesReducer,
        genresSlice: genresReducer,
        userSlice: userReducer
    },
});
