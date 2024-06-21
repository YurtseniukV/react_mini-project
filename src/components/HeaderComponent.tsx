import React from 'react';
import SearchComponent from "./SearchComponent";

const HeaderComponent = () => {
    return (
        <nav>
            <div className="nav-wrapper container">
                <a href="#" className="brand-logo">Movies finder</a>
                <SearchComponent/>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default HeaderComponent;