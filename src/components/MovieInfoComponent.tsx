import React, {FC} from 'react';
import {IMovieModel} from "../models/IMovieModel";
import PosterPreviewComponent from "./posterPreview/PosterPreviewComponent";
import {Link} from "react-router-dom";
// @ts-ignore
import ReactStars from 'react-rating-stars-component';


interface IProps {
    movie: IMovieModel
}



const MovieInfoComponent: FC<IProps> = ({movie}) => {

    return (

        <div className="movieInfo">
            <h2>{movie.title}</h2>
            <ReactStars
                count={5}
                value={movie.vote_average / 2}
                size={25}
                activeColor="gold"
                edit={false}
                isHalf={true}
            />

            <Link to={`/movies/${movie.id}`}>
                <PosterPreviewComponent movie={movie}/>
            </Link>
            <h6>{movie.overview}</h6>
        </div>
    );
};

export default MovieInfoComponent;