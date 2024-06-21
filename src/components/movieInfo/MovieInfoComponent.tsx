import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {IMovieModel} from "../../models/IMovieModel";
import {moviesActions} from "../../redux/slices/moviesSlice";

const MovieInfoComponent:FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const movie = useAppSelector(state => state.moviesSlice.movies.find((movie:IMovieModel) => movie.id === Number(id)));

    useEffect(() => {
        if (id){
            dispatch(moviesActions.loadMovieById(id))}

    }, [dispatch,id]);

    if (!movie) {
        return <div>Loading...</div>;
    }


    return (
        <div>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
                </div>
                <div>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                    <span>{movie.vote_average}</span>
                    <p>{movie.release_date}</p>
                </div>

        </div>
    );
};

export default MovieInfoComponent;