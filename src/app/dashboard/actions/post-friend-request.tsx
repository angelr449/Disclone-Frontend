import { backendPath } from "@/api/backend-path.api";
import { getUserByName } from "@/app/actions/get-user";


export const postFriendRequest = async (username: string) => {
    const { user } = await getUserByName(username)

    

    const { data } = await backendPath.post("friends/send-request", {
        friendId: String(user.id)
    });
    console.log(data)
    return data;

}
