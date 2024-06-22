import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {loadMovies} from "../redux/slices/moviesSlice";
import MovieListComponent from "../components/MovieListComponent";

const MoviesPage = () => {

    const dispatch = useAppDispatch();
    const movies = useAppSelector(state => state.moviesSlice.movies)
    const error = useAppSelector(state => state.moviesSlice.error)

    useEffect(() => {
        dispatch(loadMovies())
    }, [dispatch]);

    return (
        <div>
            {error && <div>Error: {error}</div>}
            <MovieListComponent movies={movies} />
        </div>
    );
};

export default MoviesPage;