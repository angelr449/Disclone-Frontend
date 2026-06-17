import {
  Users,
  Plus,
} from "lucide-react";

import { useQuery } from "@tanstack/react-query";

import { CustomUserPanel } from "../CustomUserPanel";
import { SidebarItem } from "./SidebarItem";
import { DMItem } from "./DMItem";

import { getChats } from "../../actions/get-chats";

import type  { Chat } from '../../../../types/chat';





interface ChatsResponse {
  chats: Chat[];
}

export const CustomChatSidebar = () => {
  const {
    data,
    isLoading,
    isError,
  } = useQuery<ChatsResponse>({
    queryKey: ["chats"],
    queryFn: getChats,
  });

  return (
    <aside className="w-[300px] bg-[#2b2d31] border-r border-[#1e1f22] flex flex-col">

      {/* Navegación */}
      <div className="p-2 space-y-1">
        <SidebarItem
          to="/"
          icon={<Users size={18} />}
          label="Friends"
        />
      </div>

      {/* Divider */}
      <div className="mx-2 border-t border-[#3f4147]" />

      {/* Direct Messages */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <span className="text-xs uppercase text-[#949ba4] font-semibold">
          DM
        </span>

        <button className="text-[#949ba4] hover:text-white">
          <Plus size={16} />
        </button>
      </div>

      {/* Lists of  chats */}
      <div className="flex-1 overflow-y-auto px-2 space-y-1">

        {isLoading && (
          <p className="text-sm text-[#949ba4] px-2">
            Loading chats...
          </p>
        )}

        {isError && (
          <p className="text-sm text-red-400 px-2">
            Error loading chats.
          </p>
        )}

        {!isLoading &&
          !isError &&
          data?.chats?.map((chat) => (
            <DMItem
              key={chat.id}
              to={`/message/${chat.id}`}
              avatar={`https://i.pravatar.cc/40?u=${chat.id}`}
              name={chat.name}
              subtitle={chat.type.toUpperCase()}
            />
          ))}

        {!isLoading &&
          !isError &&
          data?.chats?.length === 0 && (
            <p className="text-sm text-[#949ba4] px-2">
              You don't have chats.
            </p>
          )}

      </div>

      <CustomUserPanel />
    </aside>
  );
};