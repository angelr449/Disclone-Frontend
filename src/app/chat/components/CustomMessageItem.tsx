type MessageItemProps = {
  message: any;
  isSameAuthor: boolean;
};

export const CustomMessageItem = ({
  message,
  isSameAuthor,
}: MessageItemProps) => {
  if (isSameAuthor) {
    return (
      <div className="pl-[60px] py-[2px]">
        <p className="text-white">
          {message.content}
        </p>
      </div>
    );
  }

  return (
    <div className="flex gap-3 px-4 py-2 hover:bg-[#35373c]">
      <img
        src={message.sender.avatar}
        alt={message.sender.name}
        className="w-10 h-10 rounded-full flex-shrink-0"
      />

      <div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white">
            {message.sender.name}
          </span>

          <span className="text-xs text-gray-400">
            {new Date(
              message.createdAt
            ).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>

        <p className="text-white">
          {message.content}
        </p>
      </div>
    </div>
  );
};