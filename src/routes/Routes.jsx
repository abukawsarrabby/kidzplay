import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/shared/ErrorPage";
import Blog from "../pages/Blogs/Blog";
import AddToy from "../components/addToy";
import AllToys from "../components/AllToys";
import MyToys from "../components/MyToys";
import Login from "../pages/Login/Login/Login";
import Registration from "../pages/Login/Registration/Registration";
import Profile from "../pages/Login/Profile/Profile";
import AddCategory from "../components/AddCategory";
import UpdateToy from "../components/UpdateToy";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Registration></Registration>
            },
            {
                path: 'profile',
                element: <Profile></Profile>
            },
            {
                path: 'blogs',
                element: <Blog></Blog>
            },
            {
                path: 'add-new-toy',
                element: <AddToy></AddToy>,
                loader: () => fetch('http://localhost:5000/categorys')
            },
            {
                path: 'allToys',
                element: <AllToys></AllToys>,
                loader: () => fetch('http://localhost:5000/toys')
            },
            {
                path: 'myToys',
                element: <MyToys></MyToys>
            },
            {
                path: 'updateToy/:id',
                element: <UpdateToy></UpdateToy>,
                loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)
            },
            {
                path: 'add-new-category',
                element: <AddCategory></AddCategory>
            }
        ]
    }
])

export default router;