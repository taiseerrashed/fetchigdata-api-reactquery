import { useState } from "react";
import { useAddTodo, useDeleteTodo, useTodos } from "../hooks/useTodos"

const Todos = () => {
    const [title, setTitle] = useState("");

    const {data: todos, isLoading, isError, error } = useTodos();
    const {mutate: addTodo, isLoading: isAdding} = useAddTodo();
    const {mutate: deleteTodo} = useDeleteTodo();

    if(isLoading) {
        return <h2>Loading...</h2>
    }
    if(isError) {
        return <h2>{error.message}</h2>
    }

    const handleAddTodo = (e: React.FormEvent) => {
        e.preventDefault();
        const newTodo = {title, completed: false};
        console.log(newTodo);
        addTodo(newTodo);
        setTitle("");
    }

  return (
    <div className="w-full sm:w-4/5 lg:w-1/2 mx-auto text-center">
        <h2 className="text-2xl font-bold my-4">Todo List</h2>
        <div className="mb-5">
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 rounded mr-4" />
            <button onClick={handleAddTodo}>Add Todo</button>
            {isAdding && <p>Adding new todo...</p> }
        </div>
        <ul className="space-y-3 rounded-lg py-4 bg-gray-50">
            {todos?.map((todo) => {
                return(
                    <li key={todo.id} className="border-b p-2 capitalize hover:bg-white flex justify-between">
                        <span>{todo.title}</span>
                        <div className="space-x-2">
                            <button onClick={() => deleteTodo(todo.id)} className="bg-red-500 p-2 text-white rounded-lg">Delete</button>
                        </div>
                    </li>
                );
            })}
        </ul>
    </div>
  );
};

export default Todos;