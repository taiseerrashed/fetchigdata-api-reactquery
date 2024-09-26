import axios from "axios"
import { useQuery } from "react-query"

interface IPost {
    id: number;
    title: string;
    body: string
};

const fetchPostsByUser = async (userId: number): Promise<IPost[]> => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    return response.data;
};

const useUserPosts = (userId: number) => {
  return useQuery<IPost[], Error>(
    ["posts", userId], 
    () => fetchPostsByUser(userId),
    
  );
};

export default useUserPosts;