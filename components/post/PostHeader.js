import MyImg from "../ui/MyImg";
import MyIcon from "../ui/MyIcon";
import { FiMoreHorizontal } from "react-icons/fi";
import MyButton from "../ui/MyButton";
import Link from "next/link";

const PostHeader = ({ user }) => {
  return (
    <div className={`flex items-center justify-between p-3`}>
      <Link href={`/${user.username}`}>
        <a className="row-center-v space-x-2">
          <MyImg src={user.profilePicture} alt="profile picture" size={1} rounded colorful />
          <h4 className="font-semibold">{user.username}</h4>
        </a>
      </Link>

      <MyButton onClick={() => console.log("show 'more' options")}>
        <MyIcon Icon={FiMoreHorizontal} size={2} />
      </MyButton>
    </div>
  );
};
export default PostHeader;
