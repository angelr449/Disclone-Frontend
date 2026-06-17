
import { useQuery } from "@tanstack/react-query";
import { getMessages } from "../actions/get-messages";

export const useMessages = (chatId: string) => {
  return useQuery({
    queryKey: ["messages", chatId],
    queryFn: () => getMessages(chatId),
    enabled: !!chatId,
  });
}; 