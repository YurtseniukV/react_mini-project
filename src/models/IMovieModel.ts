export interface IMovieModel {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    overview: string;
    genre_ids: number[];
    release_date: string
}