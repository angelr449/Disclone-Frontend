import {
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar"
// 👈 agregar
import { CustomChatHeader } from "../components/CustomChatHeader"
import { ChatPage } from "../pages/ChatPage"
import { CustomSidebarChat } from '../../components/CustomSidebarChat';

export const ChatLayout = () => (
  <div className="h-screen bg-[#36393f] text-white"> 
    <SidebarProvider>
      <CustomSidebarChat /> {/* 👈 esto faltaba */}
      <SidebarInset className="flex flex-col flex-1 min-w-0">
        <CustomChatHeader />
        <main className="flex-1 overflow-hidden h-screen bg-[#36393f] text-white">
          <ChatPage />
        </main>
      </SidebarInset>
    </SidebarProvider>
  </div>
)