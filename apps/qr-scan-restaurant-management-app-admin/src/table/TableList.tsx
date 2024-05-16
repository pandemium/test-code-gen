import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TableList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tables"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="qrCode" source="qrCode" />
        <TextField label="tableNum" source="tableNum" />
        <TextField label="tableNumber" source="tableNumber" />
        <TextField label="tableQrCode" source="tableQrCode" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
