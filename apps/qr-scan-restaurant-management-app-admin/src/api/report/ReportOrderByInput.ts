import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  reportType?: SortOrder;
  updatedAt?: SortOrder;
};
