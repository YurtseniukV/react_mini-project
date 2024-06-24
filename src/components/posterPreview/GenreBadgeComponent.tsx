import React, {FC} from 'react';


interface IProps {
    genreId: number;
    genres: { [key: number]: string };
}

const GenreBadgeComponent: FC<IProps> = ({genreId, genres}) => {
    const genreName = genres[genreId];

    return (
        <div className="genreBadge">
            <span>{genreName}</span>
        </div>
    );
};

export default GenreBadgeComponent;