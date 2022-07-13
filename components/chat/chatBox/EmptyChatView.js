import MyIcon from "../../ui/MyIcon";
import { RiSendPlaneFill } from "react-icons/ri";
import MyButton from "../../ui/MyButton";

const EmptyChatView = (props) => {
  return (
      <div
          className="hidden md:col-center space-y-6 text-center p-2 text-gray-500">
      <span className="rounded-full border-2 border-gray-500 w-28 h-28 relative">
        <MyIcon
          Icon={RiSendPlaneFill}
          className="w-20 h-20 absolute top-2 bottom-0 my-auto left-0 right-2 mx-auto"
          hover={false}
        />
      </span>

      <h3 className="text-2xl font-light leading-4">Your Messages</h3>
      <p className="leading-3 text-gray-400">
        Send private photos and messages to a friend or group.
      </p>

      <MyButton
        onClick={() =>
          console.log("open modal for people list to send messages to")
        }
      >
        Send Message
      </MyButton>
    </div>
  );
};
export default EmptyChatView;
