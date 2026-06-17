import { backendPath } from "@/api/backend-path.api";


export const getMessages = async(chatId) => {
  const response = await backendPath.get(`/messages/${chatId}`);
    console.log(response.data)
     return response.data;
}
