import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const GenreDropdown: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const genres = useSelector((state: RootState) => state.genres.genres);

    useEffect(() => {
        dispatch(genreActions.loadGenres());
    }, [dispatch]);

    const handleGenreSelect = (genreId: number) => {
        history.push(`/genres/${genreId}`);
    };

    return (
        <div>
            <select onChange={(e) => handleGenreSelect(Number(e.target.value))}>
                <option value="">Select Genre</option>
                {genres.map((genre: IGenreModel) => (
                    <option key={genre.id} value={genre.id}>
                        {genre.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default GenreDropdown;