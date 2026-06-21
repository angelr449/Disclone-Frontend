import { backendPath } from "@/api/backend-path.api";


export const getChats = async() => {
  const response = await backendPath.get(`/chats/get-chat`);
   
     return response.data;
}
