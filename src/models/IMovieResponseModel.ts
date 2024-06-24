import {IMovieModel} from "./IMovieModel";

export interface IMovieResponseModel {
    page: number,
    results: IMovieModel[],
    total_pages: number,
    total_results: number
}