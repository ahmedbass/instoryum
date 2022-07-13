import EmptyChatView from "./EmptyChatView";
import ChatBoxHeader from "./ChatBoxHeader";
import ChatInputArea from "./ChatInputArea";
import ActualChat from "./ActualChat";

const ChatBox = ({ chat, closeChat }) => {
  if (!chat?.id) {
    return <EmptyChatView />;
  }

  return (
    <div className={`${chat ? "flex" : "hidden"} md:flex flex-col overflow-auto`}>
      <ChatBoxHeader chat={chat} closeChat={closeChat} />
      <ActualChat conversation={chat.conversation} />
      <ChatInputArea />
    </div>
  );
};

export default ChatBox;
