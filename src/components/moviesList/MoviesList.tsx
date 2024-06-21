import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {moviesActions} from "../../redux/slices/moviesSlice";
import MovieListCard from "./MovieListCard";
import Pagination from "./Pagination";
//контейнер зі списком усіх фільмів
const MoviesList = () => {

    let dispatch = useAppDispatch();
    let {movies} = useAppSelector(state => state.moviesSlice)

    useEffect(() => {
        dispatch(moviesActions.loadMovies())

    }, [dispatch]);

    return (
        <div>
            <div>
                { movies.map(movie=> (
                    <MovieListCard key={movie.id} movie={movie}/>
                )) }
                <Pagination/>
            </div>
        </div>
    );
};

export default MoviesList;