import "minifaker/locales/en";
import Chats from "./Chats";
import ListNavbar from "./ListNavbar";
import ListHeader from "./ListHeader";

const ChatList = ({ username, openChat, chatList, selectedChat }) => {
  return (
    <section
      className={`border-r border-gray-300 flex flex-col overflow-auto ${
        selectedChat && "hidden md:flex"
      }`}
    >
      <ListHeader username={username} />
      <ListNavbar />
      <Chats chatList={chatList} openChat={openChat} selectedChat={selectedChat} />
    </section>
  );
};

export default ChatList;
