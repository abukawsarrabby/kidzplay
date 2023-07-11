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
import PrivateRoute from "./PrivateRoute";
import ToyDetails from "../components/ToyDetails";
import Cart from "../pages/Cart/Cart";
import Payment from "../pages/Payment/Payment";

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
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: 'blogs',
                element: <Blog></Blog>
            },
            {
                path: 'payments',
                element: <Payment></Payment>
            },
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'add-new-toy',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>,
                loader: () => fetch('https://kidzplay-server.vercel.app/categorys')
            },
            {
                path: 'allToys',
                element: <AllToys></AllToys>,
                loader: () => fetch('https://kidzplay-server.vercel.app/toys')
            },
            {
                path: 'myToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: 'toy-details/:id',
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://kidzplay-server.vercel.app/toys/${params.id}`)
            },
            {
                path: 'updateToy/:id',
                element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
                loader: ({ params }) => fetch(`https://kidzplay-server.vercel.app/toys/${params.id}`)
            },
            {
                path: 'add-new-category',
                element: <PrivateRoute><AddCategory></AddCategory></PrivateRoute>
            }
        ]
    }
])

export default router;