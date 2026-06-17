export const ChatPage = ({ chatHistory }) => {
  return (
    <div className="h-full flex flex-col overflow-y-auto p-4">
      {chatHistory.map((message) => (
        <div
          key={message.id}
          className="flex gap-3 py-2 hover:bg-zinc-800/30 rounded px-2"
        >
          <img
            src={message.sender.avatar}
            alt={message.sender.name}
            className="w-10 h-10 rounded-full"
          />

          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">
                {message.sender.name}
              </span>

              <span className="text-xs text-zinc-400">
                {new Date(message.createdAt).toLocaleTimeString()}
              </span>
            </div>

            <p>{message.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};