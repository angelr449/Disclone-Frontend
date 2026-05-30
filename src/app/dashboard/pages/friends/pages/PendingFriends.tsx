import { RelationshipList } from "@/app/dashboard/components/RelationshipList"
import { users } from "@/app/dashboard/mock/users.mock"
import { usePedingFriends } from "../hooks/useFriends";


export const PendingFriends = () => {
  const { data: friends } = usePedingFriends();

  console.log(friends)
  return (
    <div>
      <h4>18</h4>
      <RelationshipList users={users}/>
    </div>
  )
}
