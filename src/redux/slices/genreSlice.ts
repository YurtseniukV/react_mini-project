import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IGenreModel } from '../../models/IGenreModel';
import {genreServices} from '../../services/api.services';

interface GenresState {
    genres: IGenreModel[];
    error: string | null;
}

const initialState: GenresState = {
    genres: [],
    error: null,
};

export const loadGenres = createAsyncThunk('genresSlice/loadGenres', async (_, thunkAPI) => {
    try {
        const genres = await genreServices.getAllGenres();
        return genres;
        console.log(genres)
    } catch (e) {
        throw e;
    }
});

const genreSlice = createSlice({
    name: 'genres',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadGenres.fulfilled, (state, action) => {
                state.genres = action.payload;
                state.error = null;
            })
            .addCase(loadGenres.rejected, (state, action) => {
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

const { reducer: genresReducer, actions } = genreSlice;

const genreActions = {
    ...actions,
    loadGenres,
};

export {
    genresReducer,
    genreActions
};