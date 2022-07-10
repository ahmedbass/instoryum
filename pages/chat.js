import Head from "next/head";
import MyIcon from "../components/ui/MyIcon";
import { RiSendPlaneFill } from "react-icons/ri";
import MyButton from "../components/ui/MyButton";
import ChatBox from "../components/chat/ChatBox";

const ChatList = ({username}) => {
  return <section className="border-r border-gray-300">

  </section>;
};


const Chat = (props) => {
  return (
    <div
      className="w-full h-full md:mb-6 bg-white border border-gray-300 rounded 
        grid grid-cols-[minmax(300px,1.2fr)_minmax(min-content,2fr)]"
    >
      <Head>
        <title>Inbox &bull; Chat</title>
      </Head>
      <ChatList username={"ahmed__3d"} />
      <ChatBox />
    </div>
  );
};
export default Chat;
