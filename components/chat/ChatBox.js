import MyIcon from "../ui/MyIcon";
import { RiSendPlaneFill } from "react-icons/ri";
import MyButton from "../ui/MyButton";

const EmptyChatBox = () => (
  <div className="text-gray-500 flex flex-col justify-center items-center space-y-4 text-center p-2">
    <span className="rounded-full border-2 border-gray-500 w-28 h-28 relative">
      <MyIcon
        Icon={RiSendPlaneFill}
        className="w-20 h-20 absolute top-2 bottom-0 my-auto left-0 right-2 mx-auto"
        hover={false}
      />
    </span>

    <h3 className="text-2xl font-light leading-3">Your Messages</h3>
    <p>Send private photos and messages to a friend or group.</p>

    <MyButton
      onClick={() =>
        console.log("open modal for people list to send messages to")
      }
    >
      Send Message
    </MyButton>
  </div>
);

const ChatBox = ({ chatId }) => {
  if (!chatId) {
    return <EmptyChatBox />;
  }
};

export default ChatBox;
