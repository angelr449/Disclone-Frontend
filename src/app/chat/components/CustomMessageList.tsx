import { useEffect, useRef } from "react";
import type { Message } from "../interface/message.interface";
import { CustomMessageItem } from "./CustomMessageItem";

type Props = {
  messages: Message[];
};

export const CustomMessageList = ({ messages }: Props) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {messages.map((message, index) => {
        const previousMessage = messages[index - 1];

        const isSameAuthor =
          previousMessage?.sender_id === message.sender_id;

        return (
          <CustomMessageItem
            key={message.id}
            message={message}
            isSameAuthor={isSameAuthor}
          />
        );
      })}
      <div ref={bottomRef} />
    </>
  );
};