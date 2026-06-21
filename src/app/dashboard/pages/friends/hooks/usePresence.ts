
import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getSocket } from "@/sockets/socket-client";

export const usePresence = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const socket = getSocket();

    // Initial full list when this client connects
    const handleOnlineUsers = (ids: number[]) => {
      queryClient.setQueryData<number[]>(["online-user-ids"], ids);
    };

    // Another user just came online
    const handleUserOnline = (userId: number) => {
      queryClient.setQueryData<number[]>(["online-user-ids"], (old) => {
        if (!old) return [userId];
        if (old.includes(userId)) return old;
        return [...old, userId];
      });
    };

    // Another user just went offline
    const handleUserOffline = (userId: number) => {
      queryClient.setQueryData<number[]>(["online-user-ids"], (old) => {
        if (!old) return [];
        return old.filter((id) => id !== userId);
      });
    };

    socket.on("onlineUsers", handleOnlineUsers);
    socket.on("userOnline", handleUserOnline);
    socket.on("userOffline", handleUserOffline);

    return () => {
      socket.off("onlineUsers", handleOnlineUsers);
      socket.off("userOnline", handleUserOnline);
      socket.off("userOffline", handleUserOffline);
    };
  }, [queryClient]);

  return useQuery<number[]>({
    queryKey: ["online-user-ids"],
    queryFn: () => Promise.resolve([]), 
    initialData: [],
    staleTime: Infinity,
  });
};