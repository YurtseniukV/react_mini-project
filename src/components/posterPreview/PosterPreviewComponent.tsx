import React, {FC, useEffect, useState} from 'react';
import {IMovieModel} from "../../models/IMovieModel";
import GenreBadgeComponent from "./GenreBadgeComponent";
import {genreServices} from "../../services/api.services";


interface IProps {
    movie: IMovieModel
}

const PosterPreviewComponent: FC<IProps> = ({movie}) => {
    const [genres, setGenres] = useState<{ [key: number]: string }>({});

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const allGenres = await genreServices.getAllGenres();
                const genreMap: { [key: number]: string } = {};
                allGenres.forEach((genre) => {
                    genreMap[genre.id] = genre.name;
                });
                setGenres(genreMap);
            } catch (error) {
                console.error('Failed to fetch genres:', error);
            }
        };

        fetchGenres();
    }, []);

    return (
        <div>

            <div>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                <div>
                    {movie.genre_ids.map((genreId, index) => (
                        <GenreBadgeComponent key={index} genreId={genreId} genres={genres}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PosterPreviewComponent;