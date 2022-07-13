import MyIcon from "../ui/MyIcon";
import { AiOutlineComment, AiOutlineHeart } from "react-icons/ai";
import { RiSendPlaneLine } from "react-icons/ri";
import { FiBookmark } from "react-icons/fi";

const PostActions = () => (
  <div className="grid grid-cols-3">
    <div className="flex space-x-1 sm:space-x-4">
      <MyIcon Icon={AiOutlineHeart} />
      <MyIcon Icon={AiOutlineComment} />
      <MyIcon Icon={RiSendPlaneLine} />
    </div>

    {/*{picturesCount > 1 && (*/}
    {/*  <div className="flex justify-self-center sm:hidden">*/}
    {/*    {picCountIndicators(picturesCount)}*/}
    {/*  </div>*/}
    {/*)}*/}

    <MyIcon Icon={FiBookmark} className="col-start-3 justify-self-end" />
  </div>
);

export default PostActions;
