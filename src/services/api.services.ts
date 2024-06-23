import axios, {AxiosError, isAxiosError} from "axios";
import {baseURL, urls} from "../constants/urls";
import {IMovieModel} from "../models/IMovieModel";
import {IMovieResponseModel} from "../models/IMovieResponseModel";
import {IGenreModel} from "../models/IGenreModel";
import {IGenreResponseModel} from "../models/IGenreResponseModel";


export const apiToken:string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDNmNjZkOGYxZmE2Zjg5NjNmYTVmOTJjNTAzMTJjNSIsIm5iZiI6MTcxOTA0NzE4My4zMDgwODQsInN1YiI6IjY2NzQxODM4NjVhNDFkMjEyMGRlMjVkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BP4xnawMH36NBqD2l6CtfKJLqm5v2dHZx1fBpNQot2w';
export const axiosInstance = axios.create({
    baseURL:baseURL
});

axiosInstance.interceptors.request.use(
    (config) => {
        if (apiToken) {
            config.headers.Authorization = `Bearer ${apiToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


const movieServices = {

    getAllMovies:async ():Promise<IMovieModel[]>=> {
        try {
            const response = await axiosInstance.get<IMovieResponseModel>(urls.movies.base);
            return response.data.results;
        } catch (error) {
            handleAxiosError(error);
            throw error;
        }
    },

    getMovieById : async (id: string): Promise<IMovieModel> => {
        try {
            const response = await axiosInstance.get<IMovieModel>(`/movie/${id}`);
            return response.data;
        } catch (error) {
            handleAxiosError(error);
            throw error;
        }
    },

    getMoviesByGenre: async (genreId: number):Promise<IMovieModel[]> => {
        try {
            const response = await axiosInstance.get<IMovieResponseModel>(`/discover/movie?api_key=${apiToken}&with_genres=${genreId}`); ///api/movies?genreId=${genreId}
            return response.data.results;
        } catch (error) {
            handleAxiosError(error);
            throw error;
        }
    },

    searchMoviesByTitle: async (title: string): Promise<IMovieModel[]> => {
        try {
            const response = await axiosInstance.get<IMovieResponseModel>(`/search/movie?query=${encodeURIComponent(title)}`);
            return response.data.results;
        } catch (error) {
            handleAxiosError(error);
            throw error;
        }
    },
};



const genreServices={
    getAllGenres: async ():Promise<IGenreModel[]> => {

        try {
            const response = await axiosInstance.get<IGenreResponseModel>(urls.genres.base);
            return response.data.genres;

        } catch (error) {
            handleAxiosError(error);
            throw error;
        }

    }
}  ;

function handleAxiosError(error: AxiosError<any> | unknown) {
    if (isAxiosError(error)) {
        if (error.response) {
            console.error('Request failed with status:', error.response.status);
            console.error('Response data:', error.response.data);
        } else if (error.request) {
            console.error('Request was made but no response was received:', error.request);
        } else {
            console.error('Error setting up the request:', error.message);
        }
        console.error('Error config:', error.config);
    } else {
        console.error('Unhandled error:', error);
    }
}


export {
    movieServices,
    genreServices
}