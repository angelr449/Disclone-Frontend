
import { RelationshipList } from "@/app/dashboard/components/RelationshipList"
import { useAllFriends } from "../hooks/useFriends";




export const AllFriends = () => {

  
  const { data: friends } = useAllFriends();
 
  return (

    <div>
      <h4>18</h4>
      <RelationshipList users={friends??[]} />
    </div>
  )
}
