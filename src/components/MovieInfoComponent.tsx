import React, {FC} from 'react';
import {IMovieModel} from "../models/IMovieModel";
import PosterPreviewComponent from "./PosterPreviewComponent";
import {Link} from "react-router-dom";

interface IProps{
    movie:IMovieModel
}
const MovieInfoComponent:FC<IProps>= ({movie}) => {

    return (
        <div>
            <h2>{movie.title}</h2>
            <Link to={`/movies/${movie.id}`}>
            <PosterPreviewComponent movie={movie}/>
            </Link>
            <p>{movie.overview}</p>
        </div>
    );
};

export default MovieInfoComponent;