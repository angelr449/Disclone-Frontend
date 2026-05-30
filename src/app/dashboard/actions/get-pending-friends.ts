// services/friends.service.ts

import { backendPath } from "@/api/backend-path.api";


export const getPendingFriends = async () => {
    const { data } = await backendPath.get("friends/pending");
    
    return data.friends;
};