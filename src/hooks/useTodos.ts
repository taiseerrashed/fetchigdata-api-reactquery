import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

interface ITodos {
    id: number;
    title: string;
    completed: boolean;
}

interface INewTodo {
    title: string;
    completed?: boolean;
}

const fetchTodos = async (): Promise<ITodos[]> => {
    const response = await axios.get("http://localhost:5000/todos");
    return response.data;
};

const addTodo = async(newTodo: INewTodo): Promise<INewTodo> => {
    const response = await axios.post("http://localhost:5000/todos", newTodo);
    return response.data;
}

const deleteTodo = async (todoId: number):Promise<void> => {
    await axios.delete(`http://localhost:5000/todos/${todoId}`);
}
 
export const useTodos = () => {
    return useQuery<ITodos[], Error>(
        "todos", 
        fetchTodos,
        {
            staleTime: 5000,
        }
    );
};

export const useAddTodo = () => {
    const queryClient = useQueryClient();
    return useMutation(addTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries("todos")
        }
    });
};

export const useDeleteTodo = () => {
    const queryClient = useQueryClient();
    return useMutation(deleteTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries("todos")
        }
    });
};

