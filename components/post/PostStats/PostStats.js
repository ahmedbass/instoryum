import MyButton from "../../ui/MyButton";
import { useSetRecoilState } from "recoil";
import { postDetailsModalAtom } from "../../../atom/PostDetailsAtom";
import Likes from "./Likes";

const Comments = ({ comments, onClick }) => {
  const setPostModal = useSetRecoilState(postDetailsModalAtom);

  const handleClick = () => {
    setPostModal(true);
    onClick();
  };

  if (!comments?.length) return;
  const s = comments.length > 1 ? "s" : "";
  return (
    <MyButton neutral onClick={handleClick}>
      View all {comments.length} comment{s}
    </MyButton>
  );
};

const Shares = ({ shares }) => {
  if (!shares?.length) return;
  const s = shares.length > 1 ? "s" : "";
  return (
    <MyButton neutral>
      {shares.length} share{s}
    </MyButton>
  );
};

const PostStats = ({ likes, comments, shares, onCommentClick }) => {
  return (
    <>
      <div className={`flex justify-between items-center space-x-4`}>
        <Likes likes={likes} />
        <Comments comments={comments} onClick={onCommentClick} />
        <Shares shares={shares} />
      </div>
    </>
  );
};

export default PostStats;
