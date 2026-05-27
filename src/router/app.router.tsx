

import { AuthPage } from "@/app/auth/pages/AuthPage";
import { DashboardLayout } from "@/app/dashboard/layouts/DashboardLayout";
import { AddFriends } from "@/app/dashboard/pages/friends/pages/AddFriends";
import { AllFriends } from "@/app/dashboard/pages/friends/pages/AllFriends";
import { OnlineFriends } from "@/app/dashboard/pages/friends/pages/OnlineFriends";
import { PendingFriends } from "@/app/dashboard/pages/friends/pages/PendingFriends";

import { createBrowserRouter } from "react-router";




export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <OnlineFriends />,
            },

            {
                path: "friends",
                element: <AllFriends />,
            },

            {
                path: "friends/pending",
                element: <PendingFriends />,
            },

            {
                path: "friends/add",
                element: <AddFriends />,
            },
        ]
    },

    {

        path: '/auth',
        element: <AuthPage />

    },




])