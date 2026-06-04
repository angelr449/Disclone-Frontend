import { backendPath } from "@/api/backend-path.api";


export const deleteFriendRequest= async(friendId: number, ) => {
    const { data } = await backendPath.delete(`friends/delete/${friendId}`);
        console.log(data)
        return data;
}
