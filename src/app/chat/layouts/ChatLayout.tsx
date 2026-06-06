
// 👈 agregar
import { CustomChatHeader } from "../components/CustomChatHeader"
import { ChatPage } from "../pages/ChatPage"


export const ChatLayout = () => (
  <div className="h-screen bg-[#36393f] text-white"> 
<CustomChatHeader />
        <main className="flex-1 overflow-hidden h-screen bg-[#36393f] text-white">
          <ChatPage />
        </main>
  </div>
)