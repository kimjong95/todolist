import { Button, List } from "semantic-ui-react";

export const TodoList = () => {
  return (
    <List divided relaxed inverted>
      <List.Item>
        <List.Content floated="left">
          <p>yesterday todo</p>
        </List.Content>
        <List.Content floated="right">
          <Button primary>Complete</Button>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content floated="left">
          <p>today todo</p>
        </List.Content>
        <List.Content floated="right">
          <Button primary>Complete</Button>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content floated="left">
          <p>tomorrow todo</p>
        </List.Content>
        <List.Content floated="right">
          <Button primary>Complete</Button>
        </List.Content>
      </List.Item>
    </List>
  );
};
