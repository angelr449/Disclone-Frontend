import { RelationshipList } from "@/app/dashboard/components/RelationshipList"

import { usePendingFriends } from "../hooks/useFriends";


export const PendingFriends = () => {
  const { data: friends } = usePendingFriends();

  console.log(friends)
  return (
    <div>
      <h4>18</h4>
      <RelationshipList users={friends?? []}/>
    </div>
  )
}
