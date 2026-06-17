import { useParams } from "react-router";


import { useMessages } from "../hooks/useMessages";
import { CustomMessageList } from "../components/CustomMessageList";



export const ChatPage = () => {
  const { chatId } = useParams();

  const {
    data,
    isLoading,
    error,
  } = useMessages(chatId!);

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        Cargando mensajes...
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full flex items-center justify-center">
        Error al cargar mensajes
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto bg-[#313338]">
      <CustomMessageList
        messages={data.chatHistory}
      />
    </div>
  );
};