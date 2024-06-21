import React from 'react';
import GenreFilterComponent from "../components/genreFilter/genreFilterComponent";
import MoviesList from "../components/moviesList/MoviesList";

const GenresPage = () => {
    return (
        <div>
            <div>
                <h1>films by genre</h1>
                <GenreFilterComponent/>
                <MoviesList/>
            </div>
            Genres
        </div>
    );
};

export default GenresPage;