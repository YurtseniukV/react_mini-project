import React, {FC} from 'react';
import {IMovieModel} from "../models/IMovieModel";

interface IProps{
    movie:IMovieModel
}
const PosterPreviewComponent:FC<IProps> = ({movie}) => {


    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
        </div>
    );
};

export default PosterPreviewComponent;