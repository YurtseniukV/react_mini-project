import React, {useEffect, useState} from 'react';
import SearchComponent from "./SearchComponent";
import {Link} from "react-router-dom";
import classes from "./Header.module.css";
import UserInfoComponent from "./UserInfoComponent";
import "../lightTheme.css"

const HeaderComponent = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {

        if (isDarkTheme) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }, [isDarkTheme]);

    const toggleTheme = () => {

        setIsDarkTheme(!isDarkTheme);
    };


            return (
            <div>
                <div className={classes.Header}>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/movies'}>Movies</Link>
                    <Link to={'/genres'}>Genres</Link>
                    <SearchComponent/>

                    <div className="form-check form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                            checked={isDarkTheme}
                            onChange={toggleTheme}
                        />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                            {isDarkTheme ? 'Dark Mode' : 'Light Mode'}
                        </label>
                    </div>

                    <UserInfoComponent/>
                </div>

            </div>
            );

};

export default HeaderComponent;

