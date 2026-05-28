import { backendPath } from "@/api/backend-path.api"


export const getUser = async(id: number) => {
    const response = await backendPath.get(`/users/${id}`);

    return response.data;
  
}
