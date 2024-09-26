import { ClipLoader } from "react-spinners";
import useUsers from "../hooks/useUsers"

interface IUsersListProps {
    selectedUserId: number | null;
    setSelectedUserId: (id: number) => void;
}

const UsersList = ({selectedUserId, setSelectedUserId}: IUsersListProps) => {
    const { data: users, isLoading, isError, error, isFetching } = useUsers();
    console.log({isLoading, isFetching});
    
    if(isLoading) {
        return(
            <div className="flex justify-center items-center h-[100vh]">
                <ClipLoader color="#fff" size={50} />
            </div>
        )
    }
    if(isError) return <h2>{error.message}</h2>

  return (
    <div>
        <ul className="space-y-3">
            {users?.map((user) => {
                return (
                    <li key={user.id} onClick={() => setSelectedUserId(user.id)} className={`px-4 py-2 cursor-pointer rounded-full transition-all duration-200 bg-white hover:bg-gray-200 ${selectedUserId === user.id ? 'border-4 border-orange-500 ' : 'border-none'}`}>
                        <h2 className="font-bold">{user.name}</h2>
                        <p>{user.email}</p>
                    </li>
                )
            })}
        </ul>
    </div>
  );
};

export default UsersList;