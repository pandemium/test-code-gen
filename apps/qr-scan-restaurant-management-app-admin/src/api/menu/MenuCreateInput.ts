import { InputJsonValue } from "../../types";

export type MenuCreateInput = {
  available?: boolean | null;
  category?: "Option1" | null;
  description?: string | null;
  image?: InputJsonValue;
  name?: string | null;
  price?: number | null;
};
