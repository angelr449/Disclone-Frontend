


import { AuthPage } from "@/auth/pages/AuthPage";
import { DashboardLayout } from "@/app/dashboard/layouts/DashboardLayout";
import { AddFriends } from "@/app/dashboard/pages/friends/pages/AddFriends";
import { AllFriends } from "@/app/dashboard/pages/friends/pages/AllFriends";
import { OnlineFriends } from "@/app/dashboard/pages/friends/pages/OnlineFriends";
import { PendingFriends } from "@/app/dashboard/pages/friends/pages/PendingFriends";

import { createBrowserRouter } from "react-router";
import { ProtectedRoute } from "./guards/ProtectedRoute";
import { PublicRoute } from "./guards/PublicRoute";
import { ChatLayout } from "@/app/chat/layouts/ChatLayout";
import { AppLayout } from "@/app/layout/AppLayout";





export const appRouter = createBrowserRouter([
    {
        element: <ProtectedRoute />,
        children: [
            {
                element: <AppLayout />,
                children: [
                    // Friends
                    {
                        path: "/",
                        element: <DashboardLayout />,
                        children: [
                            
                            { index: true, element: <OnlineFriends /> },
                            { path: "friends", element: <AllFriends /> },
                            { path: "friends/pending", element: <PendingFriends /> },
                            { path: "friends/add", element: <AddFriends /> },


                        ],

                    },
                    // Messages 
                    {
                        path: "/message/:id",
                        element: <ChatLayout />
                    }
                ]

            },



        ],
    },

    {
        element: <PublicRoute />,
        children: [
            { path: "/auth", element: <AuthPage /> },
        ],
    },
]);
// export const appRouter = createBrowserRouter([
//     {
//         element: <AppLayout />,
//         children: [
//             {
//                 element: <ProtectedRoute />,
//                 children: [
//                     {
//                         path: "/",
//                         element: <DashboardLayout />,
//                         children: [
//                             { index: true, element: <OnlineFriends /> },
//                             { path: "friends", element: <AllFriends /> },
//                             { path: "friends/pending", element: <PendingFriends /> },
//                             { path: "friends/add", element: <AddFriends /> },
//                         ],
//                     },
//                     {
//                         path: "/message",
//                         element: <ChatLayout />,
//                     },
//                 ],
//             },
//         ],
//     },

//     {
//         element: <PublicRoute />,
//         children: [
//             {
//                 path: "/auth",
//                 element: <AuthPage />,
//             },
//         ],
//     },
// ]);