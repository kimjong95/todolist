import { Button, Container, Form, Input, TextArea } from "semantic-ui-react";

export const CreateTodoPage = () => {
  return (
    <Container>
      <Form inverted>
        <Form.Field
          id="form-input-control-first-name"
          control={Input}
          label="Todo"
          placeholder="What is your todo"
        />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Description"
          placeholder="Descriptions..."
        />
        <Button inverted primary floated="right">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
