import { useState } from "react";
import { Button, Container, Form } from "semantic-ui-react";
import { CreateTodoContext } from "./CreateTodo.context";
import { TodoDescriptionField } from "./TodoDescriptionField";
import { TodoTitleField } from "./TodoTitleField";

export const CreateTodoPage = () => {
  //
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <CreateTodoContext.Provider
      value={{ title, setTitle, description, setDescription }}
    >
      <Container>
        <Form inverted>
          <TodoTitleField />
          <TodoDescriptionField />
          <Button inverted primary floated="right">
            Submit
          </Button>
        </Form>
      </Container>
    </CreateTodoContext.Provider>
  );
};
