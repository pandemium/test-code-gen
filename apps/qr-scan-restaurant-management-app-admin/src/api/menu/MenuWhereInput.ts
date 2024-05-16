import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type MenuWhereInput = {
  available?: BooleanNullableFilter;
  category?: "Option1";
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
};
