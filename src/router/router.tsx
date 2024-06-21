import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MoviesListPage from "../pages/MoviesListPage";
import GenresPage from "../pages/GenresPage";
import HomePage from "../pages/HomePage";
import MoviesDetailsPage from "../pages/MoviesDetailsPage";

const router = createBrowserRouter([
    {path:'', element:<MainLayout/>,
    children:[
        {index:true,element:<HomePage/>},
        {path:'movies', element:<MoviesListPage/>},
        {path:"movies/:id", element:<MoviesDetailsPage/>},
        {path:'genres', element:<GenresPage/>}
    ]}
])

export{
    router
}