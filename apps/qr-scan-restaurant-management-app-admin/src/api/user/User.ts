export type User = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  password: string | null;
  roles?: Array<"Option1">;
  updatedAt: Date;
};
