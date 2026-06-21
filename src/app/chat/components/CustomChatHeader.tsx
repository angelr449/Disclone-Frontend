import { useQuery } from "@tanstack/react-query";

import type { Chat } from '../../../types/chat';
import { getUserByToken } from "../../actions/get-user";
import { getDmDisplayInfo } from "../utils/get-dm-display-info";


interface Props {
  chat?: Chat;
}

export const CustomChatHeader = ({ chat }: Props) => {
  const { data: currentUserData } = useQuery({
    queryKey: ["current-user"],
    queryFn: getUserByToken,
  });

  const currentUser = currentUserData?.user;

  if (!chat) {
    return (
      <header className="h-12 px-4 bg-[#36393f] border-b border-[#202225] flex items-center">
        <p className="text-[#b9bbbe]">
          Select a chat
        </p>
      </header>
    );
  }

  const { name, avatar } = currentUser
    ? getDmDisplayInfo(chat, currentUser.id)
    : { name: chat.name, avatar: `https://i.pravatar.cc/40?u=${chat.id}` };

  return (
    <header className="h-12 px-4 bg-[#36393f] border-b border-[#202225] flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="w-8 h-8 rounded-full"
        />

        <div>
          <h2 className="text-sm font-semibold text-white">
            {name}
          </h2>

          <p className="text-xs text-[#b9bbbe]">
            {chat.type.toUpperCase()}
          </p>
        </div>
      </div>
    </header>
  );
};