import React, {FC, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {movieServices} from '../services/api.services';


const SearchComponent: FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const results = await movieServices.searchMoviesByTitle(searchTerm);
            navigate('/search', {state: {searchResults: results}});
        } catch (error) {
            console.error('An error occurred while searching for movies:', error);
        }
    };

    return (

        <form className="d-flex" role="search" onSubmit={handleSearch}>

            <input
                className="form-control me-2"
                type="search"
                placeholder="Search movie..."
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>

    );
};

export default SearchComponent;
