import { useState } from "react";
import { useRecoilState } from "recoil";
import { openChatIdAtom } from "../../../atom/ChatAtom";
import ChatBoxHeader from "./ChatBoxHeader";
import ChatInputArea from "./ChatInputArea";
import Conversation from "./Conversation";
import EmptyChatView from "./EmptyChatView";

const ChatBox = () => {
  const [openChatId, setOpenChatId] = useRecoilState(openChatIdAtom);

  if (!openChatId) return <EmptyChatView />;
  return (
    <div className={`${openChatId ? "flex" : "hidden"} md:flex flex-col overflow-y-auto`}>
      <ChatBoxHeader chatId={openChatId} closeChat={setOpenChatId.bind(this, null)} />
      <Conversation chatId={openChatId} />
      <ChatInputArea chatId={openChatId} />
    </div>
  );
};

export default ChatBox;
