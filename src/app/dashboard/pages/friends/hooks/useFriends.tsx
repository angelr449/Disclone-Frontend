// hooks/useFriends.ts
import { useQuery } from "@tanstack/react-query";
import { getFriends } from "@/app/dashboard/actions/get-friends";
import { getPendingFriends } from "@/app/dashboard/actions/get-pending-friends";
import { type User } from '../../../../../types/user';
import { getUserByToken } from '../../../../actions/get-user';





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

const { data:userToken } = useQuery({
    queryKey: ["current-user"],
    queryFn: getUserByToken,
});

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
            data.friendsPendingList.map((friend) => {
                const isRequester = friend.requester_id === userToken?.id;

                return {
                    id: friend.id,
                    requester_id: friend.requester_id,
                    receiver_id: friend.receiver_id,
                    status_id: friend.status_id,

                    type: isRequester ? "sent" : "received",

                    name: isRequester
                        ? friend.receiver.name
                        : friend.requester.name,

                    avatar: isRequester
                        ? friend.receiver.avatar
                        : friend.requester.avatar,
                };
            }),
    });
}; //TODO distinguir entre solicitudes que envie y recibi