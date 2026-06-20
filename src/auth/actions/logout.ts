import { removeCookie } from "@/helpers/removeCookie";
import { disconnectSocket } from "@/sockets/socket-client";
import type { QueryClient } from "@tanstack/react-query";

export const logout = (queryClient: QueryClient) => {
  removeCookie("token");
  disconnectSocket();
  queryClient.clear(); 
};