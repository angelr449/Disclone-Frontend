// hooks/useFriends.ts
import { useQuery } from "@tanstack/react-query";
import { getFriends } from "@/app/dashboard/actions/get-friends";

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