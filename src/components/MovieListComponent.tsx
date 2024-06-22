import React, {FC} from 'react';
import {IMovieModel} from "../models/IMovieModel";
import MovieListCardComponent from "./MovieListCardComponent";

interface IProps {
    movies:IMovieModel[]
}

const MovieListComponent:FC<IProps> = ({movies}) => {
    return (
                <div >
                    {movies.map(movie => (
                        <MovieListCardComponent key={movie.id} movie={movie}/>
                    ))}
                </div>
);
};

export default MovieListComponent;