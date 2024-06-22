import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MoviesPage from "../pages/MoviesPage";
import MoviesDetailPage from "../pages/MoviesDetailPage";
import GenresPage from "../pages/GenresPage";



const router = createBrowserRouter([
    {path:'', element:<MainLayout/>,
        children:[
            {path:'/', element:<MoviesPage/>},
            {path:'movies', element:<MoviesPage/>},
            {path: 'movies/:id', element: <MoviesDetailPage/>},
            {path:"/genres", element:<GenresPage/>},
            {path: "genres/:genreId", element:<GenresPage />}
        ]}
])

export{
    router
}