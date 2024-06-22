import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MoviesPage from "../pages/MoviesPage";
import GenresPage from "../pages/GenresPage";
import MoviesDetailPage from "../pages/MoviesDetailPage";



const router = createBrowserRouter([
    {path:'', element:<MainLayout/>,
        children:[
            {path:'/', element:<MoviesPage/>},
            {path:'movies', element:<MoviesPage/>},
            {path:'genres', element:<GenresPage/>},
            {path: 'movies/:id', element: <MoviesDetailPage/>},
        ]}
])

export{
    router
}