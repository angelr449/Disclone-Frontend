import { useQueryClient } from "@tanstack/react-query";
import { RelationshipList } from "@/app/dashboard/components/RelationshipList"
import { usePendingFriends } from "../hooks/useFriends";
import { Button } from "@/components/ui/button";
import { putRespondFriendRequest } from "@/app/dashboard/actions/put-respond-friend-request";

export const PendingFriends = () => {
  const queryClient = useQueryClient();
  const { data: friends = [] } = usePendingFriends();

  const sentRequests = friends.filter(
    (friend) => friend.type === "sent"
  );

  const receivedRequests = friends.filter(
    (friend) => friend.type === "received"
  );

  const handleFriendRequest = async (
    id: number,
    value: boolean
  ) => {
    try {
      await putRespondFriendRequest(
        id,
        value ? 2 : 3
      );

      queryClient.invalidateQueries({
        queryKey: ["pending-friends"],
      });

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold mb-2">
          Received Friend Requests
        </h4>

        <RelationshipList
          users={receivedRequests}
          renderActions={(user) => (
            <div className="flex gap-2">
              <Button
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() =>
                  handleFriendRequest(user.id, true)
                }
              >
                Accept
              </Button>

              <Button
                className="bg-red-600 hover:bg-red-700 text-white"
                onClick={() =>
                  handleFriendRequest(user.id, false)
                }
              >
                Decline
              </Button>
            </div>
          )}
        />
      </div>

      <div>
        <h4 className="font-semibold mb-2">
          Sent Friend Requests
        </h4>

        <RelationshipList users={sentRequests} />
      </div>
    </div>
  );
};