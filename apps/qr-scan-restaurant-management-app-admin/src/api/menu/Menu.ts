import { JsonValue } from "type-fest";

export type Menu = {
  available: boolean | null;
  category?: "Option1" | null;
  createdAt: Date;
  description: string | null;
  id: string;
  image: JsonValue;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};
