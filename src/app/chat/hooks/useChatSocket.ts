
import { useEffect, useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { getSocket } from "@/sockets/socket-client";
import type { Message } from '../interface/message.interface';


interface MessagesQueryData {
  chatHistory: Message[];
}

export const useChatSocket = (chatId: string) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!chatId) return;

    const socket = getSocket();

    socket.emit("joinChat", chatId);

   const handleNewMessage = (message: Message) => {
  if (String(message.chat_id) !== String(chatId)) {
    return;
  }

  queryClient.setQueryData<MessagesQueryData>(
    ["messages", chatId],
    (old) => {
      if (!old) return { chatHistory: [message] };
      return {
        ...old,
        chatHistory: [...old.chatHistory, message],
      };
    }
  );
};

    socket.on("newMessage", handleNewMessage);

    return () => {
      socket.off("newMessage", handleNewMessage);
     
    };
  }, [chatId, queryClient]);

  const sendMessage = useCallback(
    (content: string) => {
      if (!content.trim()) return;
      const socket = getSocket();
      socket.emit("sendMessage", { chatId, content: content.trim() });
    },
    [chatId]
  );

  return { sendMessage };
};