import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type OrderWhereInput = {
  customer?: StringNullableFilter;
  id?: StringFilter;
  notes?: StringNullableFilter;
  status?: "Option1";
};
