import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {moviesActions} from "../redux/slices/moviesSlice";
import MovieListComponent from "./MovieListComponent";


interface IProps {
    genreId: number;
}

const MoviesListByGenreComponent: FC<IProps> = ({genreId}) => {
    const dispatch = useAppDispatch();
    const movies = useAppSelector(state => state.moviesSlice.movies);
    const error = useAppSelector(state => state.moviesSlice.error);

    useEffect(() => {
        if (genreId) {
            dispatch(moviesActions.loadMoviesByGenre(genreId));
        }
    }, [dispatch, genreId]);

    return (
        <div>
            {error && <div>Error: {error}</div>}
            <MovieListComponent movies={movies}/>
        </div>

    );
};

export default MoviesListByGenreComponent;