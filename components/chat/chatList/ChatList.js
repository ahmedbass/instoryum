import "minifaker/locales/en";
import {useRecoilState} from "recoil";
import {openChatIdAtom} from "../../../atom/ChatAtom";
import { useCollectionListener } from "../../../lib/myHooks";
import { MY_SCROLL } from "../../ui/Layout";
import MyImg from "../../ui/MyImg";
import OnlineIndicator from "../../ui/OnlineIndicator";
import ListHeader from "./ListHeader";
import ListNavbar from "./ListNavbar";

const ChatRecord = ({ chat, openChat, isActive }) => {
  const activeStyle = isActive ? "bg-gray-200" : "hover:bg-gray-100 active:bg-gray-100";

  return (
    <li
      className={`row-center-v space-x-4 px-6 py-3 text-sm md:text-base cursor-pointer ${activeStyle}`}
      onClick={openChat.bind(this, chat.id)}
    >
      <div className="relative">
        <MyImg src={chat.image} size={2} rounded />
        <OnlineIndicator position="right-0 bottom-0" show={true} />
      </div>
      <div className="truncate">
        <p className="truncate">{chat.members[1]}</p>
        <p className="text-gray-500 truncate">Snippet about this long</p>
      </div>
    </li>
  );
};

const ChatList = () => {
  const chatList = useCollectionListener({ path: "chats" });
  const [openChatId, setOpenChatId] = useRecoilState(openChatIdAtom);

  return (
    <section
      className={`border-r border-gray-300 flex flex-col overflow-auto ${
        openChatId && "hidden md:flex"
      }`}
    >
      <ListHeader />
      <ListNavbar />
      <ul className={`${MY_SCROLL}`}>
        {chatList.map((chat) => (
          <ChatRecord key={chat.id} chat={chat} openChat={setOpenChatId} isActive={openChatId === chat.id} />
        ))}
      </ul>
    </section>
  );
};

export default ChatList;
