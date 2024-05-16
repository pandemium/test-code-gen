export type Order = {
  createdAt: Date;
  customer: string | null;
  id: string;
  notes: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
