import React from 'react';
import {Outlet} from "react-router-dom";
import {ThemeProvider} from "../components/context/ThemeContext";
import HeaderComponent from "../components/header/HeaderComponent";


const MainLayout = () => {
    return (
        <ThemeProvider>
            <HeaderComponent/>
            <Outlet />
        </ThemeProvider>
    );
};

export default MainLayout;