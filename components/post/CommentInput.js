import MyIcon from "../ui/MyIcon";
import { VscSmiley } from "react-icons/vsc";
import { useState } from "react";
import MyButton from "../ui/MyButton";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../lib/firebase";
import MyInput from "../ui/MyInput";
import { useSetRecoilState } from "recoil";
import { selectedPostAtom } from "../../atom/PostDetailsAtom";

const CommentInput = ({ postId, hideInSm = true }) => {
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const setSelectedPost = useSetRecoilState(selectedPostAtom);

  const uploadComment = async () => {
    if (!comment.trim().length) return;
    setIsLoading(true);

    const currentUser = {
      username: "ahmed__3d",
      profilePicture:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    };
    const commentObj = {
      comment: comment.trim(),
      author: currentUser,
      createdAt: serverTimestamp(),
    };

    await addDoc(collection(db, "posts", postId, "comments"), commentObj);
    setSelectedPost((old) => ({ ...old, comments: [commentObj, ...old.comments] }));
    setComment("");
    setIsLoading(false);
  };

  return (
    <div
      className={`w-full border-t justify-between items-center space-x-2 bg-white py-2 px-4 h-fit ${
        hideInSm ? "hidden md:flex" : "flex"
      }`}
    >
      <MyIcon Icon={VscSmiley} />

      <MyInput
        placeholder="Add a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        onEnter={uploadComment}
      />

      <MyButton disabled={!comment.trim().length || isLoading} onClick={uploadComment}>
        {isLoading ? "Posting" : "Post"}
      </MyButton>
    </div>
  );
};
export default CommentInput;
