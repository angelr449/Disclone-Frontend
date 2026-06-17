interface Chat {
  id: number;
  name: string;
  type: string;
}

interface Props {
  chat?: Chat;
}

export const CustomChatHeader = ({ chat }: Props) => {
  if (!chat) {
    return (
      <header className="h-12 px-4 bg-[#36393f] border-b border-[#202225] flex items-center">
        <p className="text-[#b9bbbe]">
          Select a chat
        </p>
      </header>
    );
  }

  return (
    <header className="h-12 px-4 bg-[#36393f] border-b border-[#202225] flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src={`https://i.pravatar.cc/40?u=${chat.id}`}
          alt={chat.name}
          className="w-8 h-8 rounded-full"
        />

        <div>
          <h2 className="text-sm font-semibold text-white">
            {chat.name}
          </h2>

          <p className="text-xs text-[#b9bbbe]">
            {chat.type.toUpperCase()}
          </p>
        </div>
      </div>
    </header>
  );
};