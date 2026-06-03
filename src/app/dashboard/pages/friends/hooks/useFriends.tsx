// hooks/useFriends.ts
import { useQuery } from "@tanstack/react-query";
import { getFriends } from "@/app/dashboard/actions/get-friends";
import { getPendingFriends } from "@/app/dashboard/actions/get-pending-friends";







interface PendingFriend {
    id: number;
    requester_id: number;
    receiver_id: number;
    status_id: number;
    type: "sent" | "received";

    requester: {
        id: number;
        name: string;
        avatar?: string;
        email: string;
    };

    receiver: {
        id: number;
        name: string;
        avatar?: string;
        email: string;
    };
}
interface PendingFriendsResponse {
    msg: string;
    friendsPendingList: PendingFriend[];
}
interface PendingFriendUI {
    id: number;
    type: "sent" | "received";
    requester_id: number;
    receiver_id: number;
    name: string;
    avatar?: string;
}


export const useAllFriends = () => {
    return useQuery({
        queryKey: ["all-friends"],
        queryFn: getFriends,
    });
};

export const useOnlineFriends = () => {
    return useQuery({
        queryKey: ["online-friends"],
        queryFn: getFriends,
    });
};

export const usePendingFriends = () => {
    return useQuery<
        PendingFriendsResponse,
        Error,
        PendingFriendUI[]
    >({
        queryKey: ["pending-friends"],
        queryFn: getPendingFriends,
        select: (data) =>
            data.friendsPendingList.map((friend) => ({
                id: friend.id,
                type: friend.type,
                requester_id: friend.requester_id,
                receiver_id: friend.receiver_id,

                name:
                    friend.type === "sent"
                        ? friend.receiver.name
                        : friend.requester.name,

                avatar:
                    friend.type === "sent"
                        ? friend.receiver.avatar
                        : friend.requester.avatar,
            })),
    });
};
