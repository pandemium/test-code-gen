import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  customer?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
