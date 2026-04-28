
import { useState } from "react";
import { Signin } from "../components/signin/Signin";
import { Button } from "@/components/ui/button";
import { Login } from "../components/login/Login";



export const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true); 
  return (
    

    <>

    {isLogin?<Login/>:<Signin/>}

    <Button  onClick={()=> setIsLogin(!isLogin)}>

         {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}

    </Button>
    
    
    </>
  )
}
