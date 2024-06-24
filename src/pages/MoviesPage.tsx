import React from 'react';
import {useAppSelector} from "../redux/hooks";
import MovieListComponent from "../components/MovieListComponent";
import PaginationComponent from "../components/PaginationComponent";
import classes from "../assets/css/MoviesPage.module.css";


const MoviesPage = () => {

    const movies = useAppSelector(state => state.moviesSlice.movies)
    const error = useAppSelector(state => state.moviesSlice.error)


    return (
        <div className={classes.container}>
            {error && <div>Error: {error}</div>}
            <MovieListComponent movies={movies}/>
            <PaginationComponent/>
        </div>
    );
};

export default MoviesPage;