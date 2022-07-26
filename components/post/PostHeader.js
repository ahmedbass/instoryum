import MyImg from "../ui/MyImg";
import MyIcon from "../ui/MyIcon";
import {FiMoreHorizontal} from "react-icons/fi";
import MyButton from "../ui/MyButton";
import Link from "next/link";

const PostHeader = ({author}) => {
  if (!author) return;
  return (
      <div className={`flex items-center justify-between p-3 border-b`}>
        <Link href={`/${author.username}`}>
          <a className="row-center-v space-x-3">
            <MyImg src={author.profilePicture} alt="profile picture" size={1} rounded colorful/>
            <div>
              <h4 className="font-semibold">{author.username}</h4>
              <p className="text-gray-500 text-sm">Location</p>
            </div>
          </a>
        </Link>

        <MyButton onClick={() => console.log("show 'more' options")}>
          <MyIcon Icon={FiMoreHorizontal} size={2}/>
        </MyButton>
      </div>
  );
};
export default PostHeader;
