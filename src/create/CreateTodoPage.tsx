import { useState } from "react";
import { Button, Container, Form } from "semantic-ui-react";
import { TodoDescriptionField } from "./TodoDescriptionField";
import { TodoTitleField } from "./TodoTitleField";

export const CreateTodoPage = () => {
  //

  return (
    <Container>
      <Form inverted>
        <TodoTitleField />
        <TodoDescriptionField />
        <Button inverted primary floated="right">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
