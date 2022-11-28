import { useNavigate } from "react-router-dom";
import { Button, List } from "semantic-ui-react";

export const TodoList = () => {
  //
  const navigate = useNavigate();

  const onClickDetail = (todoId: string) => {
    navigate(`/detail/${todoId}`);
  };
  return (
    <List celled selection divided relaxed inverted>
      <List.Item onClick={() => onClickDetail("1")}>
        <List.Content floated="left">
          <p>yesterday todo</p>
        </List.Content>
        <List.Content floated="right">
          <Button primary>Complete</Button>
        </List.Content>
      </List.Item>
      <List.Item onClick={() => onClickDetail("2")}>
        <List.Content floated="left">
          <p>today todo</p>
        </List.Content>
        <List.Content floated="right">
          <Button primary>Complete</Button>
        </List.Content>
      </List.Item>
      <List.Item onClick={() => onClickDetail("3")}>
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
