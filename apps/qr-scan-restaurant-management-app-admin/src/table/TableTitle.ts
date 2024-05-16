import { Table as TTable } from "../api/table/Table";

export const TABLE_TITLE_FIELD = "qrCode";

export const TableTitle = (record: TTable): string => {
  return record.qrCode?.toString() || String(record.id);
};
