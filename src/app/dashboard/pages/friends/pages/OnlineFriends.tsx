import { useNavigate } from "react-router";
import { RelationshipList } from "@/app/dashboard/components/RelationshipList"

import { useOnlineFriends } from "../hooks/useFriends";
import { Button } from "@/components/ui/button";
import { deleteFriendRequest } from "@/app/dashboard/actions/delete-friend-request";
import { createChat } from "@/app/dashboard/actions/create-chat";
import { useQueryClient } from "@tanstack/react-query";

export const OnlineFriends = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data: friends } = useOnlineFriends();

  const handleMessage = async (id: number) => {
    try {
      const { chat } = await createChat({ type: 'dm', targetUserId: id });
      navigate(`/message/${chat.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteFriend = async (id: number) => {
    try {
      await deleteFriendRequest(id);

      queryClient.invalidateQueries({
        queryKey: ["online-friends"],
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h4 className="px-4 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-400">
        Online Friends — {friends?.length || 0}
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