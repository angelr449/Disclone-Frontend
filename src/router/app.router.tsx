import { Login } from "@/auth/login/Login";
import { createBrowserRouter } from "react-router";




export const appRouter = createBrowserRouter([

    {

        path:'/login',
        element:<Login/>,
        
    }
])