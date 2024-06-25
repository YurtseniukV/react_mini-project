import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {useSearchParams} from "react-router-dom";
import {moviesActions} from "../redux/slices/moviesSlice";
import "../index.css"

const PaginationComponent = () => {
    const dispatch = useAppDispatch();
    const currentPage = useAppSelector(state => state.moviesSlice.currentPage);
    const [searchParams, setSearchParams] = useSearchParams({page: '1'});


    useEffect(() => {
        const pageNum = searchParams.get('page');
        dispatch(moviesActions.loadMovies({page: +pageNum!}));
    }, [searchParams, dispatch]);


    const prevHandler = () => {
        if (currentPage > 1) {
            const newPage = currentPage - 1;
            setSearchParams({page: newPage.toString()});
        }
    };

    const nextHandler = () => {
        const newPage = currentPage + 1;
        setSearchParams({page: newPage.toString()});
    };


    return (
        <div className="paginationButton">
            <button disabled={currentPage <= 1} onClick={prevHandler}>Prev</button>
            <button onClick={nextHandler}>Next</button>
        </div>
    );
};

export default PaginationComponent;