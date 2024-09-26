import { ClipLoader } from "react-spinners";
import useUserPosts from "../hooks/useUserPosts"

interface IUserPostsProps {
    userId: number;
  }

const UserPosts = ({userId}: IUserPostsProps) => {
    const { data: posts, isLoading, isError, error, isFetching } = useUserPosts(userId);
    console.log({isLoading, isFetching});
    
    if(isLoading) {
        return(
            <div className="flex justify-center items-center h-[100vh]">
                <ClipLoader color="#000" size={50} />
            </div>
        )
    }
    if(isError) return <h2>{error.message}</h2>

  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">User Posts</h2>
        <div className="space-y-3">
            {posts?.map((post) => {
                return (
                    <div key={post.id} className="bg-white p-4 rounded-lg shadow-lg">
                        <h3 className="font-bold text-xl mb-2">{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                )
            })}
        </div>
    </div>
  );
};

export default UserPosts;