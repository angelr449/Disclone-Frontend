
import { RelationshipList } from "@/app/dashboard/components/RelationshipList"
import { users } from "@/app/dashboard/mock/users.mock"
import { useOnlineFriends } from "../hooks/useFriends";



export const OnlineFriends = () => {
   const { data: friends } = useOnlineFriends();
  
  return (
    
    <div>
      <h4>18</h4>
      <RelationshipList users={friends??[]}/>
    </div>
  )
}