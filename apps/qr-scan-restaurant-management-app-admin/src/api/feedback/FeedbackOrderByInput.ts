import { SortOrder } from "../../util/SortOrder";

export type FeedbackOrderByInput = {
  createdAt?: SortOrder;
  customer?: SortOrder;
  feedback?: SortOrder;
  id?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
};
