import React, {FC} from 'react';
import {IMovieModel} from "../models/IMovieModel";
import {useLocation} from "react-router-dom";
import "../index.css"
import PaginationComponent from "../components/pagination/PaginationComponent";
import MovieInfoComponent from "../components/movie/MovieInfoComponent";

const SearchResultPage: FC = () => {
    const location = useLocation();
    const searchResults = location.state?.searchResults || [];

    return (
        <div className="SearchPageContainer">
            <div  className="searchPage">
            {searchResults.length > 0 ? (
                searchResults.map((movie: IMovieModel) => (
                    <div className="SearchPagePoster" key={movie.id}>
                        <MovieInfoComponent movie={movie}/>
                    </div>
                ))
            ) : (
                <h2>Nothing found</h2>
            )}
            </div>
            <PaginationComponent/>
        </div>
    );
};

export default SearchResultPage;