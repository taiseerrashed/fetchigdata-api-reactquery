import UsersList from "./UsersList";
import UserPosts from "./UserPosts";
import { useState } from "react";

const Home = () => {
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null)
    return (
        <div className="flex flex-col md:flex-row bg-gradient-to-r from-purple-500 to-pink-500 p-2">
          <div className="w-full md:w-1/2 lg:w-1/4 p-4 break-words">
            <UsersList selectedUserId={selectedUserId} setSelectedUserId={setSelectedUserId} />
          </div>
          <div className="w-full md:w-1/2 lg:w-3/4 bg-gray-100 p-4">
            {selectedUserId ? (
              <UserPosts userId={selectedUserId} />
            ) : (
              <UserPosts userId={1} />
            )}
          </div>
        </div>
    );
};

export default Home;
