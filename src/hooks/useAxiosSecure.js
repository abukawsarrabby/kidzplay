import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`
})

const useAxiosSecure = () => {

    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {

        // intercept request
        axiosSecure.interceptors.request.use(config => {
            const token = localStorage.getItem('access-token')
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            return config;
        });



        // intercept response
        axiosSecure.interceptors.response.use(response => response, async error => {
            if (error.response && error.response.status === 401 || error.response && error.response.status === 403) {
                await logOut();
                navigate('/')
            }
            return Promise.reject(error)
        })

    }, [logOut, navigate, axiosSecure])

    return [axiosSecure]
};

export default useAxiosSecure;