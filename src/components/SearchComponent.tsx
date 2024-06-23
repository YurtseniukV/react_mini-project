import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { movieServices } from '../services/api.services';

const SearchComponent: FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault(); // Запобігти перезавантаженню сторінки

        try {
            const results = await movieServices.searchMoviesByTitle(searchTerm);
            navigate('/search', { state: { searchResults: results } });
        } catch (error) {
            console.error('Помилка під час пошуку фільмів:', error);
        }
    };

    return (
        <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
                className="form-control me-2"
                type="search"
                placeholder="Шукати фільми за назвою..."
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">Пошук</button>
        </form>
    );
};

export default SearchComponent;
