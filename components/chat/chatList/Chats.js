import MyImg from "../../ui/MyImg";
import {MY_SCROLL} from "../../ui/Layout";
import OnlineIndicator from "../../ui/OnlineIndicator";

const Chat = ({chat, openChat, isActive}) => {
  const activeStyle = isActive ? "bg-gray-200" : "hover:bg-gray-100 active:bg-gray-100";
  return (
      <li
          className={`row-center-v space-x-4 px-6 py-3 text-sm md:text-base cursor-pointer ${activeStyle}`}
          onClick={openChat.bind(this, chat)}
      >
        <div className="relative">
          <MyImg src={chat.image} size={2} rounded/>
          <OnlineIndicator position="right-0 bottom-0"/>
        </div>
        <div className="truncate">
          <p className="truncate">{chat.username}</p>
          <p className="text-gray-500 truncate">Snippet about this long</p>
        </div>
      </li>
  );
};

const Chats = ({chatList, openChat, selectedChat}) => {
  return (
      <ul className={`${MY_SCROLL}`}>
        {chatList.map((chat) => (
            <Chat key={chat.id} chat={chat} openChat={openChat}
                  isActive={selectedChat === chat.id}/>
        ))}
      </ul>
  );
};

export default Chats;
