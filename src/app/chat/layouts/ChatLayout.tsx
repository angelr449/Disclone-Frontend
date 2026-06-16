import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import { CustomChatHeader } from "../components/CustomChatHeader";
import { ChatPage } from "../pages/ChatPage";
import { getChats } from "../actions/get-chats";

interface User {
  id: number;
  name: string;
}

interface Chat {
  id: number;
  type: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  Users: User[];
}

interface ChatsResponse {
  chats: Chat[];
}

export const ChatLayout = () => {
  const { chatId } = useParams();

  const {
    data: chatsData,
    isLoading,
    isError,
  } = useQuery<ChatsResponse>({
    queryKey: ["chats"],
    queryFn: getChats,
  });

  if (isLoading) {
    return <div>Cargando chat...</div>;
  }

  if (isError) {
    return <div>Error al cargar los chats.</div>;
  }

  const chat = chatsData?.chats.find(
    (chat) => chat.id === Number(chatId)
  );

  return (
    <div className="h-screen bg-[#36393f] text-white flex flex-col">
      <CustomChatHeader chat={chat} />

      <main className="flex-1 overflow-hidden">
        <ChatPage />
      </main>
    </div>
  );
};