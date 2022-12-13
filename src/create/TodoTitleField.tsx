import { useState } from "react";
import { Form } from "semantic-ui-react";

export const TodoTitleField = () => {
  //
  const [title, setTitle] = useState("");

  return (
    <>
      <Form.Field
        id="form-input-control-first-name"
        label="Todo"
        placeholder="What is your todo"
      />
      <Form.Input value={title} onChange={(e) => setTitle(e.target.value)} />
    </>
  );
};
