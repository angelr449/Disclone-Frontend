
import { CustomChatHeader } from "../components/CustomChatHeader";

export const ChatLayout = () => {

    return (
         <div className="h-screen bg-[#36393f] text-white">
      <CustomChatHeader />

      <main className="h-[calc(100vh-48px)]">
        {/* Mensajes */}
      </main>
    </div>
       
    );
}
