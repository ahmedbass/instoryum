import Head from "next/head";
import ChatBox from "../components/chat/chatBox/ChatBox";
import ChatList from "../components/chat/chatList/ChatList";
import {useEffect, useState} from "react";
import minifaker from "minifaker";
import {getRandomProfilePic} from "../lib/utils";

const ChatPage = (props) => {
  const [selectedChat, setSelectedChat] = useState({});
  const [chatList, setChatList] = useState([]);

  const members = ["ahmed__3d", "amrak28"];
  const getRandomMessage = () => {
    const arr = [
      "hello there, first message!",
      "hi there",
      "hi",
      "how are you doing bro",
      "what's up",
      "what's cookin'",
      "yo yo yo",
      "good morning",
      "goodnight",
      "🙂🙂🙃🙃",
      "Nice emojies bro 🙂🙃",
      "I ate pizza last night, it was so delicious, but when I left the leftovers for today, it was still delicious! 🤯",
    ];
    return arr[Math.floor(Math.random() * arr.length)];
  };
  const getRandomConversation = (numOfMessages, img) => {
    const messages = [];
    for (let i = 0; i < numOfMessages; i++) {
      messages.push({
        id: i,
        sender: {
          username: members[Math.floor(Math.random() * members.length)],
          image: img,
        },
        message: getRandomMessage(),
        sentAt: "2022-07-11T21:18:29",
        seenAt: "2022-07-12T21:14:29",
      });
    }
    return messages;
  };
  useEffect(() => {
    const fakeChats = minifaker.array(20, (i) => {
      const img = getRandomProfilePic();
      return {
        id: i + 1,
        username: minifaker.username({locale: "en"}).toLowerCase(),
        image: img,
        lastActive: 0,
        conversation: {
          id: Math.ceil(Math.random() * 100),
          members: members,
          messages: getRandomConversation(Math.floor(Math.random() * 50) + 5, img),
        },
      };
    });
    setChatList(fakeChats);
  }, []);

  return (
      <div
          className="bg-white border border-gray-300 rounded
        w-full h-[calc(100vh-65px)] md:h-[calc(95vh-65px)]
        grid md:grid-cols-[minmax(300px,1.2fr)_minmax(min-content,2fr)]"
      >
        <Head>
          <title>Inbox &bull; Chat</title>
        </Head>
        <ChatList
            username={"ahmed__3d"}
            chatList={chatList}
            openChat={setSelectedChat}
            selectedChat={selectedChat?.id}
        />
        <ChatBox chat={selectedChat} closeChat={() => setSelectedChat(null)}/>
      </div>
  );
};
export default ChatPage;
