import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import SearchComponent from "./SearchComponent";
import UserInfoComponent from "./UserInfoComponent";
import classes from "./Header.module.css";
import { ThemeContext } from "../components/ThemeContext";
import "../assets/css/theme.css"

const HeaderComponent: React.FC = () => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error('ThemeContext must be used within a ThemeProvider');
    }

    const { theme, toggleTheme } = themeContext;

    return (
        <div>
            <div className={classes.Header}>
                <Link to={'/'}>Home</Link>
                <Link to={'/movies'}>Movies</Link>
                <Link to={'/genres'}>Genres</Link>
                <SearchComponent />

                <div className="form-check form-switch">
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

                <UserInfoComponent />
            </div>
        </div>
    );
};

export default HeaderComponent;