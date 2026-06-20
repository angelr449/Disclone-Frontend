// src/pages/ChatPage.tsx
import { useState } from "react";
import { useParams } from "react-router";

import { useMessages } from "../hooks/useMessages";
import { useChatSocket } from "../hooks/useChatSocket";
import { CustomMessageList } from "../components/CustomMessageList";

export const ChatPage = () => {
  const { chatId } = useParams();
  const [content, setContent] = useState("");

  const { data, isLoading, error } = useMessages(chatId!);
  const { sendMessage } = useChatSocket(chatId!);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    sendMessage(content);
    setContent("");
  };

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        Cargando mensajes...
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full flex items-center justify-center">
        Error al cargar mensajes
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-[#313338]">
      <div className="flex-1 overflow-y-auto">
        <CustomMessageList messages={data.chatHistory} />
      </div>

      <form onSubmit={handleSubmit} className="p-4">
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enviar un mensaje..."
          className="w-full rounded-lg bg-[#383a40] px-4 py-3 text-white outline-none"
        />
      </form>
    </div>
  );
};