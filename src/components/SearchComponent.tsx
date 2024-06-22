import React, {FC, useState} from 'react';
import {IMovieModel} from "../models/IMovieModel";
import {movieServices} from "../services/api.services";
import PosterPreviewComponent from "./PosterPreviewComponent";

const SearchComponent: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<IMovieModel[]>([]);

    const handleSearch = async () => {
        try {
            const results = await movieServices.searchMoviesByTitle(searchTerm);
            const filteredResults = results.filter(movie =>
                movie.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResults(filteredResults);
        } catch (error) {
            console.error('Error searching movies:', error);

        }
    };

    return (
        <div>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search movies by title..."
                       aria-label="Search" value={searchTerm}
                       onChange={(e) => setSearchTerm(e.target.value)}/>
                <button onClick={handleSearch} className="btn btn-outline-success" type="submit">Search
                </button>
            </form>

            {searchResults.map((movie) => (
                <div><PosterPreviewComponent key={movie.id} movie={movie}/>{movie.title}</div>
            ))}


        </div>
    );
};

export default SearchComponent;