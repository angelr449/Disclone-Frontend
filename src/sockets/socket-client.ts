// src/sockets/socket-client.ts
import { io, Socket } from "socket.io-client";
import { getCookie } from "@/helpers/getCookie";

const BASE_URL = import.meta.env.VITE_API_URL;

let socket: Socket | null = null;

export const getSocket = (): Socket => {
  if (!socket) {
    const token = getCookie("token");

    socket = io(BASE_URL, {
      extraHeaders: {
        "x-token": token ?? "",
      },
      transports: ["websocket"],
    });
  }

  return socket;
};

export const disconnectSocket = () => {
  socket?.disconnect();
  socket = null;
};