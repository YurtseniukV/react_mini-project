import React from 'react';
import SearchComponent from "./SearchComponent";
import {Link} from "react-router-dom";
import classes from "./Header.module.css";
const HeaderComponent = () => {
    return (
        <nav>
            <div className="nav-wrapper container">
                <SearchComponent/>
               <div className={classes.Header}>
                   <Link to={''}>Home</Link>
                   <Link to={'/movies'}>Movies</Link>
                   <Link to={'/genres'}>Genres</Link>
               </div>
            </div>

        </nav>
    );
};

export default HeaderComponent;