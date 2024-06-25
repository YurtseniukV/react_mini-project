import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import SearchComponent from "../search/SearchComponent";
import classes from "../../assets/css/Header.module.css";
import {ThemeContext} from "../context/ThemeContext";
import "../../assets/css/theme.css"
import "../../index.css"
import UserInfoComponent from "../header/UserInfoComponent"

const HeaderComponent: React.FC = () => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error('ThemeContext must be used within a ThemeProvider');
    }

    const {theme, toggleTheme} = themeContext;

    return (
        <div className={classes.Header}>
            <Link to={'/movies'}>Movies</Link>
            <Link to={'/genres'}>Genres</Link>
            <SearchComponent/>

            <div className="form-check form-switch searchItem">
                <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                    {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                </label>
            </div>

            <UserInfoComponent/>
        </div>


    );
};

export default HeaderComponent;