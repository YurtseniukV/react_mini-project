import React from 'react';
import MoviesList from "../components/moviesList/MoviesList";

const MoviesListPage = () => {

    return (
        <div>
            <div>
                <h1>All films</h1>
                <MoviesList/>
            </div>

        </div>
    );
};

export default MoviesListPage;