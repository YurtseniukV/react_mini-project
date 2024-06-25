import React, {FC} from 'react';
import "../../index.css"

interface IProps {
    genreId: number;
    genres: { [key: number]: string };
}

const GenreBadgeComponent: FC<IProps> = ({genreId, genres}) => {
    const genreName = genres[genreId];

    return (
        <div>
            <div><p>{genreName}</p></div>
        </div>
    );
};

export default GenreBadgeComponent;