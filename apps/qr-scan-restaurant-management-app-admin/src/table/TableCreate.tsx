import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const TableCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="qrCode" source="qrCode" />
        <NumberInput step={1} label="tableNum" source="tableNum" />
        <NumberInput step={1} label="tableNumber" source="tableNumber" />
        <TextInput label="tableQrCode" source="tableQrCode" />
      </SimpleForm>
    </Create>
  );
};
