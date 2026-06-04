
import { RelationshipList } from "@/app/dashboard/components/RelationshipList"
import { useAllFriends } from "../hooks/useFriends";
import { Button } from "@/components/ui/button";
import { deleteFriendRequest } from "@/app/dashboard/actions/delete-friend-request";
import { useQueryClient } from "@tanstack/react-query";




export const AllFriends = () => {

  const queryClient = useQueryClient();
  const { data: friends } = useAllFriends();

  const handleMessage = (id: number) => {
    console.log("Enviar mensaje a", id);
  };

  const handleDeleteFriend = async (id: number) => {
  try {
    await deleteFriendRequest(id);

    queryClient.invalidateQueries({
      queryKey: ["all-friends"],
    });
  } catch (error) {
    console.error(error);
  }
};


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
