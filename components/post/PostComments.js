import MyImg from "../ui/MyImg";
import { getReadableDate } from "../../lib/utils";
import MyIcon from "../ui/MyIcon";
import { AiOutlineHeart } from "react-icons/ai";

const LikesCount = ({ likes }) => {
  if (!likes?.length) return;
  return (
    <button className="font-semibold">
      {likes.length > 1 ? `${likes.length} likes` : "1 like"}
    </button>
  );
};

const RepliesCount = ({ replies }) => {
  if (!replies?.length) return;
  return (
    <button className="text-sm text-gray-500 font-semibold w-fit flex space-x-4 items-center">
      <hr className="border-gray-500 mt-1 w-6" />
      <span>View replies ({replies.length})</span>
    </button>
  );
};

const Comment = ({ comment, author, createdAt, likes, mentions, replies }) => {
  return (
    <div className="flex justify-between space-x-4">
      <MyImg src={author.profilePicture} alt="" size={1} rounded border />

      <div className="flex flex-col flex-grow space-y-3">
        <p className="space-x-2">
          <span className="font-semibold">{author.username}</span>
          <span>{comment}</span>
        </p>

        <div className="flex space-x-3 text-sm text-gray-500">
          <span>{getReadableDate(createdAt?.seconds * 1000, true)}</span>
          <LikesCount likes={likes} />
          <button className="font-semibold">Reply</button>
        </div>

        <RepliesCount replies={replies} />
      </div>

      <MyIcon Icon={AiOutlineHeart} size={1} />
    </div>
  );
};

const PostComments = ({ comments }) => {
  if (!comments?.length) return;
  return (
    <div className={`flex flex-col flex-grow p-2 sm:p-4 space-y-4 `}>
      {comments.map((comment, i) => (
        <Comment key={comment.id + i.toString()} {...comment} />
      ))}
    </div>
  );
};
export default PostComments;
