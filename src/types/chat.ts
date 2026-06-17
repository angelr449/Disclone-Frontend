import type { User } from "./user";

export interface Chat {
  id: number;
  type: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  Users: User[];
}