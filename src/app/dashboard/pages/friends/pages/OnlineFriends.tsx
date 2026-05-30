
import { RelationshipList } from "@/app/dashboard/components/RelationshipList"

import { useOnlineFriends } from "../hooks/useFriends";



export const OnlineFriends = () => {
  const { data: friends } = useOnlineFriends();

  // solo mostrar usuarios que no esten desconectados
  

  return (

    <div>
      <h4 className="px-4 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-400">
        Online Friends — {friends?.length || 0}
      </h4>
      <RelationshipList users={friends ?? []} />
    </div>
  )
}