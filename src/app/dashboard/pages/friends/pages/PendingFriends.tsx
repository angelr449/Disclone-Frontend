import { RelationshipList } from "@/app/dashboard/components/RelationshipList"

import { usePendingFriends } from "../hooks/useFriends";
import { Button } from "@/components/ui/button";


export const PendingFriends = () => {
  const { data: friends = [] } = usePendingFriends();

  const sentRequests = friends.filter(
    (friend) => friend.type === "sent"
  );

  const receivedRequests = friends.filter(
    (friend) => friend.type === "received"
  );

  const handleFriendRequest = (
    id: number,
    value: boolean
  ) => {
    console.log(id, value);
  };
  const handleMessage = (id: number) => {
    console.log("Enviar mensaje a", id);
  };

  return (
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold mb-2">
          Solicitudes recibidas
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
          Solicitudes enviadas
        </h4>

        <RelationshipList  users={sentRequests}
        renderActions={(user) => (
          <Button
            onClick={() => handleMessage(user.id)}
          >
            Message
          </Button>
        )}
      />
      </div>
    </div>
  );
};
