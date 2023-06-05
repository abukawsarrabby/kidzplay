import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const Users = () => {

    const { user, loading } = useContext(AuthContext);

    const token = localStorage.getItem('access-token')

    const { isLoading, isError, data, error, refetch } = useQuery({
        queryKey: ['mytoys', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/mytoys?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json();

        },
    })
    return [isLoading, data, refetch]
};

export default Users;

