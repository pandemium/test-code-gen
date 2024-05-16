import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type TableWhereInput = {
  id?: StringFilter;
  qrCode?: StringNullableFilter;
  tableNum?: IntNullableFilter;
  tableNumber?: IntNullableFilter;
  tableQrCode?: StringNullableFilter;
};
