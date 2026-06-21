import { backendPath } from "@/api/backend-path.api"

interface CreateChatPayload {
    type: 'dm' | 'server' | 'group';
    targetUserId?: number;
    name?: string;
}

export const createChat = async (payload: CreateChatPayload) => {
    const response = await backendPath.post('/chats/create-chat', payload);

    return response.data;
}