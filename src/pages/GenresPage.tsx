import React, {useEffect} from 'react';
import GenreListComponent from "../components/GenreListComponent";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {genreActions} from "../redux/slices/genreSlice";
import {useParams} from "react-router-dom";
import MoviesListByGenreComponent from "../components/MoviesListByGenreComponent";



const GenresPage = () => {

    const dispatch = useAppDispatch()
    const { genreId } = useParams<{ genreId: string }>();
    const genres = useAppSelector(state => state.genresSlice.genres)
    // const movies = useAppSelector(state => state.moviesSlice.movies);


    useEffect(() => {
        dispatch(genreActions.loadGenres());
    }, [dispatch]);



    return (
        <div style={{display: 'flex'}}>
            <div style={{width: '20%'}}>
                <GenreListComponent genres={genres}/>
            </div>
            <div style={{width: '80%'}}>
                {genreId ? (
                    <MoviesListByGenreComponent genreId={Number(genreId)}/>
                ) : (
                    <div>Select a genre to see movies</div>
                )}
            </div>

        </div>
    );
};


export default GenresPage;