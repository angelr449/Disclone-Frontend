import type { Chat } from '../../../types/chat';


interface DmDisplayInfo {
  name: string;
  avatar: string;
}

export const getDmDisplayInfo = (chat: Chat, currentUserId: number): DmDisplayInfo => {
  if (chat.type !== 'dm') {
    return {
      name: chat.name,
      avatar: `https://i.pravatar.cc/40?u=${chat.id}`,
    };
  }

  const otherUser = chat.Users.find((u) => u.id !== currentUserId);

  return {
    name: otherUser?.name ?? chat.name,
    avatar: otherUser?.avatar || `https://i.pravatar.cc/40?u=${chat.id}`,
  };
};