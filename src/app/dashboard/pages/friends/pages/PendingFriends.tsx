import { RelationshipList } from "@/app/dashboard/components/RelationshipList"

import { usePendingFriends } from "../hooks/useFriends";
import { Button } from "@/components/ui/button";


export const PendingFriends = () => {
  const { data: friends } = usePendingFriends();

  const handleFriendRequest = (id: number, value: boolean)=>{
    console.log('handleFriendRequest user and value', id, value)

  } 
  console.log(friends)
  return (
    <div>
      <h4>18</h4>
      <RelationshipList users={friends ?? []}
        renderActions={(user) => (
          <div className="flex gap-2"

          >
            <Button className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => handleFriendRequest(user.id, true)}
            >
              accept
            </Button>

            <Button className="bg-red-600 hover:bg-red-700 text-white"
              onClick={() => handleFriendRequest(user.id, false)}
            >
              decline
            </Button>
          </div>

        )}
      />
    </div>
  )
}
