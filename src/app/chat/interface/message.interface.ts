// interfaces/message.interface.ts

export interface Sender {
  id: number;
  name: string;
  avatar: string;
}

export interface Message {
  id: number;
  chat_id: number;
  sender_id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  sender: Sender;
}