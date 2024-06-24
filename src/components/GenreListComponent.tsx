import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {IGenreModel} from "../models/IGenreModel";


interface IProps {
    genres: IGenreModel[],
}

const GenreListComponent: FC<IProps> = ({genres}) => {

    return (
        <div>
            <h2>Genres</h2>
            <ul>
                {genres.map((genre) => (
                    <li key={genre.id}>
                        <Link to={`/genres/${genre.id}`}>{genre.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GenreListComponent;