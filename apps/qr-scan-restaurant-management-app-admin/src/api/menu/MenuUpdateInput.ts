import { InputJsonValue } from "../../types";

export type MenuUpdateInput = {
  available?: boolean | null;
  category?: "Option1" | null;
  description?: string | null;
  image?: InputJsonValue;
  name?: string | null;
  price?: number | null;
};
