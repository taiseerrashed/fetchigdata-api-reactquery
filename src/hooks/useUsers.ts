import axios from "axios";
import { useQuery } from "react-query";

interface IUser {
    id: number;
    name: string;
    email: string;
}

const fetchUsers = async (): Promise<IUser[]> => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
}; 

export const useUsers = () => {
    return useQuery<IUser[], Error>(
        "users", 
        fetchUsers,
        {
            staleTime: 5000,
        }
    );
};

export default useUsers;
