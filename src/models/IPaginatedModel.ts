import {IMovieModel} from "./IMovieModel";

export interface IPaginatedModel{
    page: number,
    results:IMovieModel[],
    total_pages: number,
    total_results: number
}