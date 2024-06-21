import React, {FC} from 'react';
import classes from "./pagination.module.css";
interface PaginationProps{
    totalPages:number,
    currentPage:number,
    moveToPage:(page:number)=>void;
}
const PaginationComponent:FC<PaginationProps> = ({totalPages,currentPage,moveToPage}) => {
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    const handlePrev = () => {
        if (!isFirstPage) {
            moveToPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (!isLastPage) {
            moveToPage(currentPage + 1);
        }
    };




    return (
        <div>
            <div className={classes.pagination}>
                <button onClick={handlePrev} disabled={isFirstPage}>
                    Prev
                </button>
                <span>Сторінка {currentPage} з {totalPages}</span>
                <button onClick={handleNext} disabled={isLastPage}>
                   Next
                </button>
            </div>
        </div>
    );
};

export default PaginationComponent;