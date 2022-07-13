import MyIcon from "../../ui/MyIcon";
import {VscSmiley} from "react-icons/vsc";
import {AiOutlineHeart} from "react-icons/ai";
import {FiImage} from "react-icons/fi";
import {useState} from "react";

const ChatInputArea = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
      <div className="p-4">
        <div
            className="row-center border border-gray-300 rounded-full overflow-hidden px-2.5 space-x-3">
          <MyIcon Icon={VscSmiley}/>
          <input
              type="text"
              className="flex-grow min-w-0 p-2.5 outline-none"
              placeholder="Message..."
              value={inputValue}
              onChange={handleInputChange}
          />
          {inputValue ? (
              <button className="font-semibold text-blue-500 px-2">Send</button>
          ) : (
              <>
                <MyIcon Icon={FiImage}/>
                <MyIcon Icon={AiOutlineHeart}/>
              </>
          )}
        </div>
      </div>
  );
};

export default ChatInputArea;
