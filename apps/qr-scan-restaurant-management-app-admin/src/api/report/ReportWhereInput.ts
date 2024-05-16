import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type ReportWhereInput = {
  content?: JsonFilter;
  id?: StringFilter;
  reportType?: "Option1";
};
