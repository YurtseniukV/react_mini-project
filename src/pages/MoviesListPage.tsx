import React, {FC, useState} from 'react';
import MoviesListComponent from "../components/moviesList/MoviesListComponent";
import PaginationComponent from "../components/moviesList/PaginationComponent";

const MoviesListPage:FC = () => {
const totalPages:number = 500;
const [currentPage,setCurrentPage]=useState(1);

const moveToPage = (page:number) =>{
    setCurrentPage(page);
}

    return (
        <div>
            <div>
                <h1>All films</h1>
                <MoviesListComponent/>
                <PaginationComponent totalPages={totalPages} currentPage={currentPage} moveToPage={moveToPage}/>
            </div>

        </div>
    );
};

export default MoviesListPage;