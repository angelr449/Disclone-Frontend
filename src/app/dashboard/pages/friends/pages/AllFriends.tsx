
import { RelationshipList } from "@/app/dashboard/components/RelationshipList"
import { useAllFriends } from "../hooks/useFriends";
import { Button } from "@/components/ui/button";
import { deleteFriendRequest } from "@/app/dashboard/actions/delete-friend-request";




export const AllFriends = () => {


  const { data: friends } = useAllFriends();

  const handleMessage = (id: number) => {
    console.log("Enviar mensaje a", id);
  };

  const handleDeleteFriend = async(id)=>{
    await deleteFriendRequest(id)
  }


  return (

    <div>
      <h4 className="px-4 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-400">
        All Friends — {friends?.length || 0}
      </h4>
      <RelationshipList users={friends ?? []}
        renderActions={(user) => (
          <div className="flex gap-2">
            <Button
              onClick={() => handleMessage(user.id)}
            >
              Message
            </Button>

            <Button className="bg-destructive"
              
              onClick={() => handleDeleteFriend(user.id)}
            >
              Delete
            </Button>
          </div>

        )}
      />
    </div>
  )
}
