// services/friends.service.ts

import { backendPath } from "@/api/backend-path.api";


export const getFriends = async () => {
    const { data } = await backendPath.get("friends/get-friends");
    
    return data.friends;
};