import React from 'react';
import GenreFilterComponent from "../components/genreFilter/genreFilterComponent";
import MoviesListComponent from "../components/moviesList/MoviesListComponent";

const GenresPage = () => {
    return (
        <div>
            <div>
                <h1>films by genre</h1>
                <GenreFilterComponent/>
                <MoviesListComponent/>
            </div>
            Genres
        </div>
    );
};

export default GenresPage;