import React from 'react';
import MovieListCardComponent from "../components/movie/MovieListCardComponent";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../redux/hooks";
import {IMovieModel} from "../models/IMovieModel";
import "../index.css"


const MoviesDetailPage = () => {

    const {id} = useParams<{ id: string }>();
    let movie: IMovieModel | undefined = useAppSelector(state => state.moviesSlice.movies.find(movie => movie.id === parseInt(id!)));
    const error = useAppSelector(state => state.moviesSlice.error);


    if (!movie) {
        return <div>Loading...</div>;
    }


    return (
        <div className="moviesDetailPage">
                {error && <div>Error: {error}</div>}
                <MovieListCardComponent movie={movie}/>
            <div className="moviesDetailContent"><h1>{movie.title}</h1><p>{movie.overview}</p>
            <span>Release date : {movie.release_date}</span></div>
        </div>
    );
};

export default MoviesDetailPage;