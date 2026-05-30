// hooks/useFriends.ts
import { useQuery } from "@tanstack/react-query";
import { getFriends } from "@/app/dashboard/actions/get-friends";
import { getPendingFriends } from "@/app/dashboard/actions/get-pending-friends";
import { type User } from '../../../../../types/user';




interface PendingFriend {
    id: number;
    requester_id: number;
    receiver_id: number;
    status_id: number;
    requester: {
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
        User[]
    >({
        queryKey: ["pending-friends"],
        queryFn: getPendingFriends,
        select: (data) =>
            data.friendsPendingList.map((friend) => ({
                id: friend.requester.id,
                name: friend.requester.name,
                avatar: friend.requester.avatar,
            })),
    });
};