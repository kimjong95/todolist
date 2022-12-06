import { useContext } from "react";
import { Card, Grid } from "semantic-ui-react";
import TodoListContext from "../MainPage.context";

export const TodoSummary = () => {
  //
  const todoList = useContext(TodoListContext);

  console.log("##TodoSummary", todoList);

  return (
    <Grid columns={2} divided centered>
      <Grid.Row>
        <Card.Group>
          <Card>
            <Card.Content>
              <Card.Header>Total Todos</Card.Header>
              <Card.Description>
                <strong>{todoList.length}</strong>
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Completed Todos</Card.Header>
              <Card.Description>
                <strong>7</strong>
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </Grid.Row>
    </Grid>
  );
};
