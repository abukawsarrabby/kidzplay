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
                path: 'blogs',
                element: <Blog></Blog>
            },
            {
                path: 'addToy',
                element: <AddToy></AddToy>
            },
            {
                path: 'allToys',
                element: <AllToys></AllToys>
            },
            {
                path: 'myToys',
                element: <MyToys></MyToys>
            }
        ]
    }
])

export default router;