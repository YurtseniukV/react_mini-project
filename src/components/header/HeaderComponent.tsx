import React from 'react';
import {Link} from "react-router-dom";

import classes from "./Header.module.css";
const HeaderComponent = () => {
    return (
        <div>
            <div className={classes.Header}>
                <Link to={''}>Home</Link>
                <Link to={'/movies'}>Movies</Link>
                <Link to={'/genres'}>Genres</Link>

            </div>
        </div>
    );
};

export default HeaderComponent;