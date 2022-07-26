import MyIcon from "../../ui/MyIcon";
import {VscSmiley} from "react-icons/vsc";
import {AiOutlineHeart} from "react-icons/ai";
import {FiImage} from "react-icons/fi";
import {useState} from "react";
import MyInput from "../../ui/MyInput";

const ChatInputArea = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
      <div className="p-4">
        <div
            className="row-center border border-gray-300 rounded-3xl overflow-hidden px-2.5 space-x-3">
          <MyIcon Icon={VscSmiley}/>
          <MyInput
              placeholder="Message..."
              value={inputValue}
              onChange={handleInputChange}
              className="m-0.5"
          />
          {/*<input*/}
          {/*    type="text"*/}
          {/*    className="flex-grow min-w-0 p-2.5 outline-none"*/}
          {/*    placeholder="Message..."*/}
          {/*    value={inputValue}*/}
          {/*    onChange={handleInputChange}*/}
          {/*/>*/}

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
