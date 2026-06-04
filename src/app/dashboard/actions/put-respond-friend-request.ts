import { backendPath } from "@/api/backend-path.api";



export const putRespondFriendRequest = async(  requestId: number, requestStatus: 2 | 3) => {
  
     
    
        const { data } = await backendPath.put(`friends/${requestId}/respond`, {
            requestStatus, 
        });
        console.log(data)
        return data;
}