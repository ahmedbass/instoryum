import {serverTimestamp} from "firebase/firestore";
import {useState} from "react";
import {AiOutlineHeart} from "react-icons/ai";
import {FiImage} from "react-icons/fi";
import {VscSmiley} from "react-icons/vsc";
import {useRecoilValue} from "recoil";
import {currentUserAtom} from "../../../atom/CurrentUserAtom";
import {useSetDoc} from "../../../lib/myHooks";
import MyButton from "../../ui/MyButton";
import MyIcon from "../../ui/MyIcon";
import MyInput from "../../ui/MyInput";

const ChatInputArea = ({chatId}) => {
  const currentUser = useRecoilValue(currentUserAtom);
  const addMessage = useSetDoc();
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setInputValue("");
    await addMessage(`chats/${chatId}/messages`, {
      message: inputValue,
      sender: currentUser.id,
      type: "text",
      sentAt: serverTimestamp(),
    });
  };

  return (
      <div className="p-4 mt-auto bg-white">
        <form
            onSubmit={handleSubmit}
            className="row-center border border-gray-300 rounded-3xl overflow-hidden px-2.5 space-x-3"
        >
          <MyIcon Icon={VscSmiley}/>
          <MyInput
              placeholder="Message..."
              value={inputValue}
              onChange={handleInputChange}
              onSubmit={handleSubmit}
          />
          {/*<input*/}
          {/*    type="text"*/}
          {/*    className="flex-grow min-w-0 p-2.5 outline-none"*/}
          {/*    placeholder="Message..."*/}
          {/*    value={inputValue}*/}
          {/*    onChange={handleInputChange}*/}
          {/*/>*/}

          {inputValue ? (
              <MyButton className="px-2">Send</MyButton>
          ) : (
              <>
                <MyIcon Icon={FiImage}/>
                <MyIcon Icon={AiOutlineHeart}/>
              </>
          )}
        </form>
      </div>
  );
};

export default ChatInputArea;
