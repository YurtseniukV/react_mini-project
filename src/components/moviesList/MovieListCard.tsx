import React, {FC} from 'react';
import {IMovieModel} from "../../models/IMovieModel";
import {Link} from "react-router-dom";

// відображення одного фільму із загального контейнеру
interface IProps {
    movie: IMovieModel
}

const MovieListCard: FC<IProps> = ({movie}) => {

    return (
        <div>
            <div>
                <Link to={`/movie/${movie.id}`}>
                    <h1>{movie.title}</h1>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
                </Link>
            </div>
        </div>
    );
};

export default MovieListCard;