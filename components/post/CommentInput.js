import MyIcon from "../ui/MyIcon";
import { VscSmiley } from "react-icons/vsc";
import { useState } from "react";

const CommentInput = ({ className }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div
      className={`w-full border-t hidden md:flex justify-between items-center space-x-2 bg-white py-2 px-4 ${className}`}
    >
      <MyIcon Icon={VscSmiley} />

      <input
        type="text"
        className="flex-grow p-2 outline-none"
        placeholder="Add a comment..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button
        disabled={!inputValue.length}
        className="font-semibold text-blue-500 disabled:text-blue-300"
      >
        Post
      </button>
    </div>
  );
};
export default CommentInput;
