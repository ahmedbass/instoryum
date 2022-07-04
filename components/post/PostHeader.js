import Img from "../ui/Img";
import { IoIosMore } from "react-icons/io";
import PostIcon from "./PostIcon";
import {MdOutlineMoreHoriz} from "react-icons/md";
import {RiMoreLine} from "react-icons/ri";
import {FiMoreHorizontal} from "react-icons/fi";

const PostHeader = ({ user, className }) => {
  return (
    <div className={`flex items-center justify-between p-3 ${className}`}>
      <div className="flex items-center space-x-2">
        <Img
          src={user.profilePicture}
          alt="profile picture"
          size={1}
          rounded
          colorful
        />
        <h4 className="font-semibold">{user?.username}</h4>
      </div>

      <button>
        <PostIcon Icon={FiMoreHorizontal} size={2}/>
      </button>
    </div>
  );
};
export default PostHeader;
