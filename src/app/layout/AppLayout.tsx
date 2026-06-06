import { Outlet } from "react-router"
import { CustomChatSidebar } from "../components/CustomSidebarChat"


export const AppLayout = () => {
    return (
        <div className="flex h-screen">
            <CustomChatSidebar />
            <main className="flex-1 overflow-hidden">
                <Outlet />
            </main>
        </div>
    )
}
