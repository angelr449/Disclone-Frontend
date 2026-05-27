import { backendPath } from "../auth/api/backend-path.api";





export const  postLogin = async(email:string , password:string ) =>{

    const {data} = await backendPath.post('/auth/login',{
        email,
        password,
    }); 


    return {
        data
  
    };
}