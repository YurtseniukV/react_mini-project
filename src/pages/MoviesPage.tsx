import React from 'react';
import {useAppSelector} from "../redux/hooks";
import MovieListComponent from "../components/MovieListComponent";
import PaginationComponent from "../components/PaginationComponent";
import "../index.css"


const MoviesPage = () => {

    const movies = useAppSelector(state => state.moviesSlice.movies)
    const error = useAppSelector(state => state.moviesSlice.error)


    return (
        <div className="moviesPage">
            {error && <div>Error: {error}</div>}
            <MovieListComponent movies={movies}/>
            <PaginationComponent/>
        </div>
    );
};

export default MoviesPage;