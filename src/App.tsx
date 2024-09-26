import { QueryClient, QueryClientProvider } from "react-query";
import {ReactQueryDevtools} from "react-query/devtools"
import UsersList from "./components/UsersList";
import UserPosts from "./components/UserPosts";
import { useState } from "react";

const queryClient = new QueryClient();

function App() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null)
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col md:flex-row bg-gradient-to-r from-purple-500 to-pink-500 p-2">
        <div className="w-full md:w-1/2 lg:w-1/4 p-4 break-words">
          <UsersList selectedUserId={selectedUserId} setSelectedUserId={setSelectedUserId} />
        </div>
        <div className="w-full md:w-1/2 lg:w-3/4 bg-gray-100 p-4">
          {selectedUserId ? (
            <UserPosts userId={selectedUserId} />
          ) : (
            // <p className="text-gray-500">Select a user to view posts</p>
            <UserPosts userId={1} />
          )}
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
};

export default App;
