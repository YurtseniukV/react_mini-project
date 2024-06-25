import React, {FC} from 'react';
import {IMovieModel} from "../models/IMovieModel";
import PosterPreviewComponent from "../components/posterPreview/PosterPreviewComponent";
import {useLocation} from "react-router-dom";
import "../index.css"

const SearchResultPage: FC = () => {
    const location = useLocation();
    const searchResults = location.state?.searchResults || [];

    return (
        <div className="searchPage">
            {searchResults.length > 0 ? (
                searchResults.map((movie: IMovieModel) => (
                    <div key={movie.id}>
                        <PosterPreviewComponent movie={movie}/>
                        {movie.title}
                    </div>
                ))
            ) : (
                <h2>Nothing found</h2>
            )}
        </div>
    );
};

export default SearchResultPage;