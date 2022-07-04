import PostIcon from "./PostIcon";
import { AiOutlineComment, AiOutlineHeart } from "react-icons/ai";
import { RiSendPlaneLine } from "react-icons/ri";
import { FiBookmark } from "react-icons/fi";
import { GoPrimitiveDot } from "react-icons/go";

const PostIcons = ({ picturesCount, picCountIndicators }) => {
  return (
    <div className="grid grid-cols-3">
      <div className="flex space-x-1 sm:space-x-4">
        <PostIcon Icon={AiOutlineHeart} />
        <PostIcon Icon={AiOutlineComment} />
        <PostIcon Icon={RiSendPlaneLine} />
      </div>

      {picturesCount > 1 && (
        <div className="flex justify-self-center sm:hidden">
          {picCountIndicators(picturesCount)}
        </div>
      )}

      <PostIcon Icon={FiBookmark} className="col-start-3 justify-self-end" />
    </div>
  );
};
export default PostIcons;
