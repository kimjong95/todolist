import { useContext, useEffect, useState } from "react";
import { Button, Card, Container, Divider, Grid } from "semantic-ui-react";
import { Todo } from "../shared/Todo";
import { TodoList } from "./list/TodoList";
import TodoListContext from "./MainPage.context";
import { getTodos } from "./MainPage.query";
import { TodoSummary } from "./summary/TodoSummary";

export const MainPage = () => {
  //
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getTodos().then((res) => {
      setTodos(res);
    });
  }, []);

  return (
    <TodoListContext.Provider value={todos}>
      <Container>
        <TodoSummary />
        <Divider />
        <TodoList />
      </Container>
    </TodoListContext.Provider>
  );
};
