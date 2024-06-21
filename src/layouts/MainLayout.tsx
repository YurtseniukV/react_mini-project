import React from 'react';
import HeaderComponent from "../components/HeaderComponent";
import {Outlet} from "react-router-dom";


const MainLayout = () => {

    return (
        <div>
            <div className="App">
                <HeaderComponent/>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;