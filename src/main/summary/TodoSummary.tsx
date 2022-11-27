import { Card, Grid } from "semantic-ui-react";

export const TodoSummary = () => {
  return (
    <Grid columns={2} divided centered>
      <Grid.Row>
        <Card.Group>
          <Card>
            <Card.Content>
              <Card.Header>Total Todos</Card.Header>
              <Card.Description>
                <strong>15</strong>
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
