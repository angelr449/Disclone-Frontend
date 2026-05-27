

import { AuthPage } from "@/app/auth/pages/AuthPage";

import { createBrowserRouter } from "react-router";




export const appRouter = createBrowserRouter([

    {

        path: '/auth',
        element: <AuthPage />

    },




])