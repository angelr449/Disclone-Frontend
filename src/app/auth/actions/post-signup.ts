import { backendPath } from "../../../api/backend-path.api";


interface SignupData {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}


export const  postSignup = async({name, email, password, repeatPassword}: SignupData) =>{

    const {data} = await backendPath.post('/auth/signup',{
        name,
        email,
        password,
        repeatPassword
    }); 


    return {
        data
  
    };
}