import React, {FC} from 'react';
import {IMovieModel} from "../models/IMovieModel";
import MovieInfoComponent from "./MovieInfoComponent";


interface IProps{
    movie:IMovieModel
}

const MovieListCardComponent:FC<IProps> = ({movie}) => {
    return (
        <div>
            <div>

                <MovieInfoComponent movie={movie}/>

            </div>
        </div>
    );
};

export default MovieListCardComponent;