import MyImg from "../../ui/MyImg";
import MyIcon from "../../ui/MyIcon";
import {GoInfo} from "react-icons/go";
import {TbVideo} from "react-icons/tb";
import {IoChevronBack} from "react-icons/io5";
import OnlineIndicator from "../../ui/OnlineIndicator";

const ChatBoxHeader = ({chat, closeChat}) => (
    <div
        className="px-2 sm:px-4 min-h-[4rem] max-h-[4rem] border-b border-gray-300 space-x-4 row-center">
      <MyIcon Icon={IoChevronBack} className="md:hidden" onClick={closeChat}/>
      <div className="relative">
        <MyImg src={chat.image} size={1} rounded/>
        <OnlineIndicator/>
      </div>
      <div className="flex-grow min-w-0">
        <h4 className="text-lg font-semibold truncate">{chat.username}</h4>
        <p className="text-sm text-gray-400 truncate">Active 3h ago</p>
      </div>
      <div className="relative">
        <MyIcon Icon={TbVideo} className="w-8 h-8"/>
      </div>
      <MyIcon Icon={GoInfo}/>
    </div>
);

export default ChatBoxHeader;
