import { createContext } from "react";

interface CreateTodoContextType {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

export const CreateTodoContext = createContext<CreateTodoContextType>({
  title: "",
  setTitle: () => {},
  description: "",
  setDescription: () => {},
});
