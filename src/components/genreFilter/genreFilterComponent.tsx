import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {genreActions} from "../../redux/slices/genreSlice";
import {moviesActions} from "../../redux/slices/moviesSlice";



const GenreFilterComponent = () => {

   let dispatch = useAppDispatch();
   let {genres} = useAppSelector(state => state.genresSlice)

    useEffect(() => {
        dispatch(genreActions.loadGenres());
    }, [dispatch]);

    const handleGenreClick = (genreId: number) => {
        console.log('Selected genre:', genreId);
dispatch(moviesActions.loadMoviesByGenre(genreId));
    };

    return (
        <div>
            <div className="genre-filter">
                <h3>Виберіть жанр:</h3>
                <div className="genre-buttons">
                    {genres.map(genre => (
                        <button key={genre.id} onClick={() => handleGenreClick(genre.id)} className="genre-button">
                            {genre.name}
                        </button>
                    ))}
                </div>
            </div>
            {/*{genres.map(genre => (*/}
            {/*    <div key={genre.id}>{genre.name}</div>*/}
            {/*))}*/}
        </div>
    );
};

export default GenreFilterComponent;