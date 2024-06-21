import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MoviesPage from "../pages/MoviesPage";
import GenresPage from "../pages/GenresPage";
import HomePage from "../pages/HomePage";



const router = createBrowserRouter([
    {path:'', element:<MainLayout/>,
        children:[
            {path:'', element:<HomePage/>},
            {path:'movies', element:<MoviesPage/>},
            {path:'genres', element:<GenresPage/>}
        ]}
])

export{
    router
}