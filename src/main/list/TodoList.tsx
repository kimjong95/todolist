import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, List } from "semantic-ui-react";
import TodoListContext from "../MainPage.context";

export const TodoList = () => {
  //
  const navigate = useNavigate();

  const onClickDetail = (todoId: string) => {
    navigate(`/detail/${todoId}`);
  };

  const todoList = useContext(TodoListContext);

  console.log("###TodoList", todoList);

  const onClickComplete = () => {
    console.log("###OnClick");
  };

  return (
    <List celled selection divided relaxed inverted>
      {todoList.map((todo) => {
        return (
          <List.Item key={todo.id} onClick={() => onClickDetail(todo.id)}>
            <List.Content floated="left">
              <p>{todo.title}</p>
            </List.Content>
            <List.Content floated="right">
              <Button primary onClick={() => onClickComplete()}>
                Complete
              </Button>
            </List.Content>
          </List.Item>
        );
      })}
    </List>
  );
};
