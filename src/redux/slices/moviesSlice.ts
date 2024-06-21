import {IMovieModel} from "../../models/IMovieModel";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieServices} from "../../services/api.services";

interface MoviesState {
    movies: IMovieModel[];
    error: string | null;
}

const initialState: MoviesState = {
    movies: [],
    error: null,
};

export const loadMovies = createAsyncThunk('moviesSlice/loadMovies', async (_, thunkAPI) => {
    try {
        const movies = await movieServices.getAllMovies();
        return movies;
    } catch (e) {
        throw e;
    }
});

export const loadMovieById = createAsyncThunk('moviesSlice/loadMovieById', async (id: string) => {
    try {
        const movie = await movieServices.getMovieById(id);
        return movie
    } catch (e) {
        throw e;
    }
})

export const loadMoviesByGenre = createAsyncThunk('moviesSlice/loadMoviesByGenre', async (genreId: number, thunkAPI) => {
    try {
        const movies = await movieServices.getMoviesByGenre(genreId);
        return movies;
    } catch (e) {
        throw e;
    }
});

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadMovies.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
            .addCase(loadMovies.rejected, (state, action) => {
                state.error = action.error.message || 'Something went wrong';
            })
            .addCase(loadMovieById.fulfilled, (state, action) => {
                state.movies = state.movies.concat(action.payload);
            })
            .addCase(loadMovieById.rejected, (state, action) => {
                state.error = action.error.message || 'Something went wrong';
            })
            .addCase(loadMoviesByGenre.fulfilled, (state, action) => {
                state.movies = state.movies.concat(action.payload);
            })
            .addCase(loadMoviesByGenre.rejected, (state, action) => {
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

const {reducer: moviesReducer, actions} = moviesSlice;

const moviesActions = {
    ...actions,
    loadMovies,
    loadMovieById,
    loadMoviesByGenre
};

export {
    moviesReducer,
    moviesActions
};