import React from 'react';
import SearchComponent from "./SearchComponent";
import {Link} from "react-router-dom";
import classes from "./Header.module.css";
import UserInfoComponent from "./UserInfoComponent";
import GenreDropdown from "./GenreDropdown";
const HeaderComponent = () => {
    return (
            <div>
                <div className={classes.Header}>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/movies'}>Movies</Link>
                    <GenreDropdown/>
                    <UserInfoComponent/>
                </div>
                <SearchComponent/>
            </div>
    );
};

export default HeaderComponent;

