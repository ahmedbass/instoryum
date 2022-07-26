import MyIcon from "../ui/MyIcon";
import { AiFillHeart, AiOutlineComment, AiOutlineHeart } from "react-icons/ai";
import { RiSendPlaneLine } from "react-icons/ri";
import { FiBookmark } from "react-icons/fi";
import MyButton from "../ui/MyButton";
import { postDetailsModalAtom, selectedPostAtom } from "../../atom/PostDetailsAtom";
import { useSetRecoilState } from "recoil";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

export const likePost = async (postId, currentUser, setSelectedPost) => {
  setSelectedPost((old) => ({ ...old, likes: [...(old?.likes || []), currentUser] }));
  await setDoc(doc(db, "posts", postId, "likes", currentUser), { username: currentUser });
};

export const unlikePost = async (postId, currentUser, setSelectedPost) => {
  setSelectedPost((old) => ({ ...old, likes: old?.likes.filter((like) => like !== currentUser) }));
  await deleteDoc(doc(db, "posts", postId, "likes", currentUser));
};

export const Like = ({ isLiked, postId }) => {
  const setSelectedPost = useSetRecoilState(selectedPostAtom);
  const currentUser = "ahmed__3d";

  return isLiked ? (
    <MyButton onClick={unlikePost.bind(this, postId, currentUser, setSelectedPost)}>
      <MyIcon Icon={AiFillHeart} className="text-red-500" hover={false} />
    </MyButton>
  ) : (
    <MyButton onClick={likePost.bind(this, postId, currentUser, setSelectedPost)}>
      <MyIcon Icon={AiOutlineHeart} />
    </MyButton>
  );
};

export const Comment = ({ onClick }) => {
  const setPostModal = useSetRecoilState(postDetailsModalAtom);

  const handleClick = () => {
    setPostModal(true);
    onClick && onClick();
  };
  return (
    <MyButton onClick={handleClick}>
      <MyIcon Icon={AiOutlineComment} />
    </MyButton>
  );
};

export const Share = () => {
  return (
    <MyButton>
      <MyIcon Icon={RiSendPlaneLine} />
    </MyButton>
  );
};

const Save = () => {
  return (
    <MyButton neutral>
      <MyIcon Icon={FiBookmark} />
    </MyButton>
  );
};

const PostActions = ({ isLiked, selectPost, postId }) => {
  return (
    <div className="flex justify-between">
      <div className="flex space-x-1 sm:space-x-4">
        <Like isLiked={isLiked} postId={postId} />
        <Comment onClick={selectPost} />
        <Share />
      </div>

      <Save />
    </div>
  );
};

export default PostActions;
