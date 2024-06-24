import React, {FC} from 'react';
import {IMovieModel} from "../models/IMovieModel";
import PosterPreviewComponent from "./posterPreview/PosterPreviewComponent";
import {Link} from "react-router-dom";
// @ts-ignore
import ReactStars from 'react-rating-stars-component';
import classes from "../assets/css/MoviesPage.module.css";

interface IProps {
    movie: IMovieModel
}



const MovieInfoComponent: FC<IProps> = ({movie}) => {

    return (

        <div className={classes.movieInfo}>
            <ReactStars
                count={5}
                value={movie.vote_average / 2}
                size={24}
                activeColor="gold"
                edit={false}
                isHalf={true}
            />
            <h2>{movie.title}</h2>
            <Link to={`/movies/${movie.id}`}>
                <PosterPreviewComponent movie={movie}/>
            </Link>
            <p>{movie.overview}</p>
        </div>
    );
};

export default MovieInfoComponent;