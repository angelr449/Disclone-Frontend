import { backendPath } from "@/api/backend-path.api";

export const getMessages = async (chatId: string) => {
  const response = await backendPath.get(`/messages/${chatId}`);

  return response.data;
};