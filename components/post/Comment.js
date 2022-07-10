import MyImg from "../ui/MyImg";
import {getReadableDate} from "../../utils";
import MyIcon from "../ui/MyIcon";
import {AiOutlineHeart} from "react-icons/ai";

const Comment = ({
                   comment,
                   createdAt,
                   likes,
                   mentions,
                   replies,
                   username,
                   userPic,
                 }) => {
  return (
      <div>
        <div className="flex justify-between space-x-4">
          <MyImg src="" alt="" size={1} rounded colorful/>

          <div className="flex flex-col flex-grow space-y-3">
            <p className="space-x-2">
              <span className="font-semibold">{username}</span>
              <span>{comment}</span>
            </p>

            <div className="flex space-x-3 text-sm text-gray-500">
              <span>{getReadableDate(createdAt, true)}</span>

              {likes.length > 0 && (
                  <button className="font-semibold">
                    {likes.length > 1 ? `${likes.length} likes` : "1 like"}
                  </button>
              )}
              <button className="font-semibold">Reply</button>
            </div>

            {replies.length > 0 && (
                <button
                    className="text-sm text-gray-500 font-semibold w-fit flex space-x-4 items-center">
                  <hr className="border-gray-500 mt-1 w-6"/>
                  <span>View replies ({replies.length})</span>
                </button>
            )}
          </div>

          <MyIcon Icon={AiOutlineHeart} size={1}/>
        </div>
      </div>
  );
};
export default Comment;
