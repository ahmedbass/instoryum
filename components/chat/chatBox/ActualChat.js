import { applyLineBreaks, getReadableDate, isOnlyEmoji } from "../../../utils";
import { MY_SCROLL } from "../../ui/Layout";
import { useEffect, useRef } from "react";
import MyImg from "../../ui/MyImg";

const Message = ({ message, isLastInSequence, isMyself }) => {
  const emojiStyle =
    isOnlyEmoji(message.message) && `text-4xl leading-tight bg-none border-none px-0 ml-6`;
  const myStyle =
    "bg-gradient-to-br from-purple-700 to-blue-700 text-white md:bg-none md:text-gray-700 md:bg-gray-200";
  const othersStyle = "md:bg-white text-gray-700 bg-gray-200 ml-6";

  const layout = isMyself ? "self-end text-end" : "self-start text-start";
  const messageStyle = emojiStyle || (isMyself ? myStyle : othersStyle);

  return (
    <li className={`first:mt-auto max-w-[80%] lg:max-w-[45%] relative ${layout}`}>
      <div className={`border rounded-3xl px-4 py-2 ${messageStyle}`}>
        <p>{applyLineBreaks(message.message)}</p>
      </div>

      {isLastInSequence && !isMyself && (
        <MyImg
          src={message.sender.image}
          size={0.5}
          rounded
          className="absolute bottom-0 -left-2"
        />
      )}
    </li>
    // {message.sender}
  );
};

const ActualChat = ({ conversation }) => {
  const myUsername = "ahmed__3d";
  const { id, messages } = conversation;
  const lastMessage = messages[messages.length - 1];

  const messageEndRef = useRef();

  const scrollToBottom = (behavior) => messageEndRef.current?.scrollIntoView({ behavior });
  useEffect(() => scrollToBottom("auto"), [id]);
  // useEffect(() => scrollToBottom("smooth"), [messages]);
  return (
    <ul className={`col-center-h flex-grow px-6 pt-4 space-y-2  ${MY_SCROLL}`}>
      {messages.map((message, i, messages) => (
        <Message
          key={message.id}
          message={message}
          isLastInSequence={message.sender.username !== messages[i + 1]?.sender?.username}
          isMyself={message.sender.username.toLowerCase() === myUsername.toLowerCase()}
        />
      ))}

      <li ref={messageEndRef} className="text-sm text-gray-500 self-end mx-2">
        {lastMessage?.sender.username === myUsername &&
          lastMessage.seenAt &&
          `Seen ${getReadableDate(messages[messages.length - 1].seenAt, true)} ago`}
      </li>
    </ul>
  );
};

export default ActualChat;
