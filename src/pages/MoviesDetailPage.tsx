import React from 'react';
import MovieListCardComponent from "../components/MovieListCardComponent";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {IMovieModel} from "../models/IMovieModel";


const MoviesDetailPage = () => {

    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    let movie: IMovieModel | undefined = useAppSelector(state => state.moviesSlice.movies.find(movie => movie.id === parseInt(id!)));

    const error = useAppSelector(state => state.moviesSlice.error);


    if (!movie) {
        return <div>Loading...</div>;
    }


    return (
        <div>
            <div>
                {error && <div>Error: {error}</div>}
                <MovieListCardComponent movie={movie}/>
            </div>
        </div>
    );
};

export default MoviesDetailPage;