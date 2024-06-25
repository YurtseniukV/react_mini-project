import React, {useEffect} from 'react';
import GenreListComponent from "../components/genre/GenreListComponent";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {genreActions} from "../redux/slices/genreSlice";
import {useParams} from "react-router-dom";
import MoviesListByGenreComponent from "../components/movie/MoviesListByGenreComponent";
import "../index.css"
import PaginationComponent from "../components/pagination/PaginationComponent";
import MovieListComponent from "../components/movie/MovieListComponent";

const GenresPage = () => {

    const dispatch = useAppDispatch()
    const {genreId} = useParams<{ genreId: string }>();
    const genres = useAppSelector(state => state.genresSlice.genres)
const movies = useAppSelector(state => state.moviesSlice.movies)

    useEffect(() => {
        dispatch(genreActions.loadGenres());
    }, [dispatch]);


    return (
        <div className="GenresPage">
            <div className="GenresPageContent">
                <GenreListComponent genres={genres}/>

            <div>
                {genreId ? (
                    <MoviesListByGenreComponent genreId={Number(genreId)}/>
                ) : (
                    <MovieListComponent movies={movies}/>
                )}
            </div>
        </div>
<PaginationComponent/>
        </div>
    );
};


export default GenresPage;