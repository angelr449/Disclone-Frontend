import { RelationshipList } from "@/app/dashboard/components/RelationshipList"
import { users } from "@/app/dashboard/mock/users.mock"


export const AllFriends = () => {
  return (
    <div>
      <RelationshipList users={users}/>
    </div>
  )
}
