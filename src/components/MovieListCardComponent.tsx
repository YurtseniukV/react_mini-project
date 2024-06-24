import React, {FC} from 'react';
import {IMovieModel} from "../models/IMovieModel";
import MovieInfoComponent from "./MovieInfoComponent";
import classes from "../assets/css/MoviesPage.module.css";


interface IProps {
    movie: IMovieModel
}

const MovieListCardComponent: FC<IProps> = ({movie}) => {
    return (
            <div className={classes.container}>
                <MovieInfoComponent movie={movie}/>
            </div>
    );
};

export default MovieListCardComponent;