import React, {FC} from 'react';
import {IMovieModel} from "../../models/IMovieModel";
import MovieInfoComponent from "./MovieInfoComponent";
import "../../index.css"

interface IProps {
    movie: IMovieModel
}

const MovieListCardComponent: FC<IProps> = ({movie}) => {
    return (
        // <div className="movieCardContainer">

            /*<div className="contentListCard"><h5>Release date</h5>*/
            /*    <p>{movie.release_date}</p></div>*/

            <div className="movieListCard">
                <MovieInfoComponent movie={movie}/>
            </div>


        // </div>
    );
};

export default MovieListCardComponent;