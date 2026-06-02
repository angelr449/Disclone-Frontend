import { backendPath } from "@/api/backend-path.api"


export const getUser = async (id: number) => {
    const response = await backendPath.get(`/users/${id}`);

    return response.data;

}

export const getUserByName = async (name: string) => {
    const response = await backendPath.get(`/users/search/${name}`);

    console.log(response.data.user)
    return response.data;
}