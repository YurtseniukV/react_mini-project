import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {genreActions} from "../../redux/slices/genreSlice";



const GenreFilterComponent = () => {

   let dispatch = useAppDispatch();
   let {genres} = useAppSelector(state => state.genresSlice)

    useEffect(() => {
        dispatch(genreActions.loadGenres());
    }, [dispatch]);
    return (
        <div>
            {genres.map(genre => (
                <div key={genre.id}>{genre.name}</div>
            ))}
        </div>
    );
};

export default GenreFilterComponent;