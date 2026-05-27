import { loginApi } from "../auth/api/login.api";



const BASE_URL = import.meta.env.VITE_API_URL;

export const  getLogin = async()=>{

    const {data} = await loginApi('/auth/login',{
        email,
        password,
    }); 


    return {
        ...data,
  
    };
}