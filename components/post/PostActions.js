import MyIcon from "../ui/MyIcon";
import {AiOutlineComment, AiOutlineHeart} from "react-icons/ai";
import {RiSendPlaneLine} from "react-icons/ri";
import {FiBookmark} from "react-icons/fi";
import MyButton from "../ui/MyButton";

const PostActions = ({setShowComments}) => (
    <div className="flex justify-between">
      <div className="flex space-x-1 sm:space-x-4">
        <MyButton neutral>
          <MyIcon Icon={AiOutlineHeart}/>
        </MyButton>
        <MyButton neutral onClick={setShowComments}>
          <MyIcon Icon={AiOutlineComment}/>
        </MyButton>
        <MyButton neutral>
          <MyIcon Icon={RiSendPlaneLine}/>
        </MyButton>
      </div>

      {/*{picturesCount > 1 && (*/}
      {/*  <div className="flex justify-self-center sm:hidden">*/}
      {/*    {picCountIndicators(picturesCount)}*/}
      {/*  </div>*/}
      {/*)}*/}

      <MyButton neutral>
        <MyIcon Icon={FiBookmark}/>
      </MyButton>
    </div>
);

export default PostActions;
