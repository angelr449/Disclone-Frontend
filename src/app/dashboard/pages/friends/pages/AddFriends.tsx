import {  useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { postFriendRequest } from "@/app/dashboard/actions/post-friend-request";



export const AddFriends = () => {
  const [username, setUsername] = useState(""); 

  const handleSendRequest = ()=>{

    console.log(username)
    postFriendRequest(username)

  }


  return (
    <div className="flex flex-col gap-6 p-6">

      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-bold uppercase">
          Add Friend
        </h2>

        <p className="text-sm text-muted-foreground">
          You can add friends with their username.
        </p>
      </div>

      <div
        className="
      flex
      items-center
      gap-3
      rounded-lg
      bg-[#1e1f22]
      p-2
    "
      >
        <Input
        
          placeholder="Enter a username"
          value={username}
          onChange={(e)=> setUsername(e.target.value)}
          className="
        border-0
        bg-transparent
        shadow-none
        focus-visible:ring-0
        focus-visible:ring-offset-0
        "
         
        />

        <Button 
        className="bg-green-700 hover:bg-green-900"
         onClick={handleSendRequest}
        >
          Send Friend Request
        </Button>
      </div>

    </div>
  )
}
