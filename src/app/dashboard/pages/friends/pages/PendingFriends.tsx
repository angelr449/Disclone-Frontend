import { RelationshipList } from "@/app/dashboard/components/RelationshipList"
import { users } from "@/app/dashboard/mock/users.mock"


export const PendingFriends = () => {
  return (
    <div>
      <h4>18</h4>
      <RelationshipList users={users}/>
    </div>
  )
}
