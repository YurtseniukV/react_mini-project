import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {moviesActions} from "../../redux/slices/moviesSlice";
import MovieListCardComponent from "./MovieListCardComponent";
import PaginationComponent from "./PaginationComponent";
//контейнер зі списком усіх фільмів
const MoviesListComponent = () => {

    let dispatch = useAppDispatch();
    let {movies} = useAppSelector(state => state.moviesSlice)

    useEffect(() => {
        dispatch(moviesActions.loadMovies())

    }, [dispatch]);

    return (
        <div>
            <div>
                { movies.map(movie=> (
                    <MovieListCardComponent key={movie.id} movie={movie}/>
                )) }
                <PaginationComponent/>
            </div>
        </div>
    );
};

export default MoviesListComponent;