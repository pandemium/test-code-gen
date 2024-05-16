import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const FeedbackEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="customer" source="customer" />
        <TextInput label="feedback" multiline source="feedback" />
        <NumberInput step={1} label="rating" source="rating" />
      </SimpleForm>
    </Edit>
  );
};
