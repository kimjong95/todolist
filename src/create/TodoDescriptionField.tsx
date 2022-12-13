import { useState } from "react";
import { Form } from "semantic-ui-react";

export const TodoDescriptionField = () => {
  //
  const [description, setDescription] = useState("");

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
