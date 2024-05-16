import { JsonValue } from "type-fest";

export type Report = {
  content: JsonValue;
  createdAt: Date;
  id: string;
  reportType?: "Option1" | null;
  updatedAt: Date;
};
