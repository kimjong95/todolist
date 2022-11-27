import { Button, Card, Container, Divider, Grid } from "semantic-ui-react";
import { TodoList } from "./list/TodoList";
import { TodoSummary } from "./summary/TodoSummary";

export const MainPage = () => {
  return (
    <Container>
      <TodoSummary />
      <Divider />

      <TodoList />
    </Container>
  );
};
