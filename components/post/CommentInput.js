import MyIcon from "../ui/MyIcon";
import {VscSmiley} from "react-icons/vsc";

const CommentInput = ({className }) => {
  return (
    <div
      className={
        `w-full border-t flex justify-between items-center space-x-2 bg-white py-2 px-4 ${className}`
      }
    >
      <MyIcon Icon={VscSmiley} />
      <input
        type="text"
        className="flex-grow p-2 outline-none"
        placeholder="Add a comment..."
      />
      <button className="font-semibold text-blue-400">Post</button>
    </div>
  );
};
export default CommentInput;
