import React from 'react';
import {Outlet} from "react-router-dom";
import {ThemeProvider} from "../components/ThemeContext";
import HeaderComponent from "../components/HeaderComponent";

const MainLayout = () => {
    return (
        <ThemeProvider>
            <HeaderComponent/>
            <Outlet />
        </ThemeProvider>
    );
};

export default MainLayout;