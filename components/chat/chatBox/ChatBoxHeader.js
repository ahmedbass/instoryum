import { GoInfo } from "react-icons/go";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { IoChevronBack } from "react-icons/io5";
import { useDoc } from "../../../lib/myHooks";
import MyIcon from "../../ui/MyIcon";
import MyImg from "../../ui/MyImg";
import OnlineIndicator from "../../ui/OnlineIndicator";

const ChatBoxHeader = ({ chatId, closeChat }) => {
  const chatDetails = useDoc(`chats/${chatId}`);
  console.log(`users/${chatDetails?.members[2]?.id}`, "<userRef");
  const otherUser = useDoc(`users/${chatDetails?.members[2]?.id}` || "/");
  console.log(chatDetails?.members[2], "<chatDetails", otherUser, "<User Data");
  if (!chatDetails?.id) return;
  const { id, username, profilePicture, activeStatus } = otherUser || {
    id: "1",
    username: "test",
    profilePicture: "",
    activeStatus: "Active 3d ago",
  };

  return (
    <div className="px-2 sm:px-4 min-h-[4rem] max-h-[4rem] border-b border-gray-300 space-x-4 row-center">
      <MyIcon Icon={IoChevronBack} className="md:hidden" onClick={closeChat} />
      <div className="relative">
        <MyImg src={profilePicture} size={1} rounded />
        <OnlineIndicator />
      </div>
      <div className="flex-grow min-w-0">
        <h4 className="text-lg font-semibold truncate">{username || id}</h4>
        <p className="text-sm text-gray-400 truncate">{activeStatus}</p>
      </div>
      <div className="relative">
        <MyIcon Icon={HiOutlineVideoCamera} className="w-8 h-8" />
      </div>
      <MyIcon Icon={GoInfo} />
    </div>
  );
};
export default ChatBoxHeader;
