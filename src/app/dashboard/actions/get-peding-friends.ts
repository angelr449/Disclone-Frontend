// services/friends.service.ts

import { backendPath } from "@/api/backend-path.api";


export const getPedingFriends = async () => {
    const { data } = await backendPath.get("friends/peding");
    
    return data.friends;
};