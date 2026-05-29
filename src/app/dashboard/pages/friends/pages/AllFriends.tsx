import { getFriends } from "@/app/dashboard/actions/get-friends";
import { RelationshipList } from "@/app/dashboard/components/RelationshipList"
import { users } from "@/app/dashboard/mock/users.mock"
import { useQuery } from "@tanstack/react-query";


export const AllFriends = () => {

  const useFriends = () => {
    return useQuery({
      queryKey: ["friends"],
      queryFn: getFriends,
    });

  };
  const { data: friends, isLoading } = useFriends();
  console.log(friends)
  return (

    <div>
      <h4>18</h4>
      <RelationshipList users={users} />
    </div>
  )
}
