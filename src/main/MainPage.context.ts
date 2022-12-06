import { createContext } from "react";
import { Todo } from "./../shared/Todo";

export type TodoListContextType = Todo[];

const TodoListContext = createContext<TodoListContextType>([]);

export default TodoListContext;
