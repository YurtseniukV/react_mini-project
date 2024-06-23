import React, {FC} from 'react';
import {IMovieModel} from "../models/IMovieModel";
import PosterPreviewComponent from "../components/PosterPreviewComponent";
import {useLocation} from "react-router-dom";



const SearchResultPage:FC = () => {
    const location = useLocation();
    const searchResults = location.state?.searchResults || [];

    return (
        <div>
            {searchResults.length > 0 ? (
                searchResults.map((movie: IMovieModel) => (
                    <div key={movie.id}>
                        <PosterPreviewComponent movie={movie}/>
                        {movie.title}
                    </div>
                ))
            ) : (
                <div>Нічого не знайдено</div>
            )}
        </div>
    );
};

export default SearchResultPage;