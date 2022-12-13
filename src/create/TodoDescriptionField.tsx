import { useContext, useState } from "react";
import { Form } from "semantic-ui-react";
import { CreateTodoContext } from "./CreateTodo.context";

export const TodoDescriptionField = () => {
  //
  const { description, setDescription } = useContext(CreateTodoContext);

  return (
    <>
      <Form.Field
        id="form-textarea-control-opinion"
        label="Description"
        placeholder="Descriptions..."
      />
      <Form.TextArea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </>
  );
};
