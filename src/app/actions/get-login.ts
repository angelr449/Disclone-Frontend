import { loginApi } from "../auth/api/login.api";





export const  getLogin = async(email:string , password:string ) =>{

    const {data} = await loginApi.post('/auth/login',{
        email,
        password,
    }); 


    return {
        data
  
    };
}