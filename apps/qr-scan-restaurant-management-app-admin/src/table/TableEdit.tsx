import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const TableEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="qrCode" source="qrCode" />
        <NumberInput step={1} label="tableNum" source="tableNum" />
        <NumberInput step={1} label="tableNumber" source="tableNumber" />
        <TextInput label="tableQrCode" source="tableQrCode" />
      </SimpleForm>
    </Edit>
  );
};
