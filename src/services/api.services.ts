import axios from "axios";
import {baseURL, urls} from "../constants/urls";
import {IResponseModel} from "../models/IResponseModel";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {IGenreModel} from "../models/IGenreModel";
import {IMovieModel} from "../models/IMovieModel";

export const axiosInstance = axios.create({
    baseURL:baseURL
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = '103f66d8f1fa6f8963fa5f92c50312c5';
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
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
            const response = await axiosInstance.get<IResponseModel>(urls.movies.base);
            return response.data.results;
        } catch (e) {
            console.error('Error fetching movies:', error);
            throw error;
        }
    },

     getMovieById : async (id: string): Promise<IMovieModel> => {
         const response = await axiosInstance.get<IMovieModel>(`/movie/${id}`);
         return response.data;
     }


};


   const genreServices={
       getAllGenres: async ():Promise<IGenreModel[]> => {

           try {
               const response = await axiosInstance.get<IGenreModel[]>(urls.genres.base);
               return response.data;
           } catch (error) {
               console.error('Error fetching genres:', error);
               throw error;
           }

   }
 }  ;


export {
     movieServices,
    genreServices
}