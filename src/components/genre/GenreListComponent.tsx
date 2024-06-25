import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {IGenreModel} from "../../models/IGenreModel";
import "../../index.css"

interface IProps {
    genres: IGenreModel[],
}

const GenreListComponent: FC<IProps> = ({genres}) => {

    return (
        <div className="GenresList">
            {/*<h2>Genres</h2>*/}
                {genres.map((genre) => (
                    <div className="GenreItem" key={genre.id}>
                        <Link to={`/genres/${genre.id}`}>{genre.name}</Link>
                    </div>
                ))}
        </div>
    );
};

export default GenreListComponent;