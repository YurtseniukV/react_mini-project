import React from 'react';
import SearchComponent from "./SearchComponent";
import {Link} from "react-router-dom";
import classes from "./Header.module.css";
import UserInfoComponent from "./UserInfoComponent";
import GenreListComponent from "./GenreListComponent";
const HeaderComponent = () => {
            return (
            <div>
                <div className={classes.Header}>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/movies'}>Movies</Link>
                    <Link to={'/genres'}>Genres</Link>
                    <SearchComponent />
                    <UserInfoComponent />
                </div>

            </div>
            );

};

export default HeaderComponent;

