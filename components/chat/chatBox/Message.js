import { useCallback } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { HiOutlineReply } from "react-icons/hi";
import { applyLineBreaks, getReadableDateTime, isOnlyEmoji } from "../../../lib/utils";
import MyButton from "../../ui/MyButton";
import MyIcon from "../../ui/MyIcon";
import MyImg from "../../ui/MyImg";

const MessageDate = ({ date, className }) => {
  return (
    <p className={`pt-4 px-2 text-sm text-gray-400 text-center ${className}`}>
      {getReadableDateTime(date)}
    </p>
  );
};

const MoreActions = ({ messageId }) => {
  return (
    <MyButton
      onClick={() => console.log("more actions (like, copy, share)", messageId)}
      className="!m-0"
    >
      <MyIcon Icon={FiMoreHorizontal} size={2} className="text-gray-500 hover:text-gray-700" />
    </MyButton>
  );
};

const ReplyToMessage = ({ messageId }) => {
  return (
    <MyButton onClick={() => console.log("Reply to message", messageId)}>
      <MyIcon Icon={HiOutlineReply} size={2} className="text-gray-500 hover:text-gray-700" />
    </MyButton>
  );
};

const Message = ({
  message,
  showSendDate,
  isMyself,
  isFirstInSequence,
  isLastInSequence,
  isDelayed,
  isNextDelayed,
}) => {
  const getMessageStyle = useCallback(() => {
    const baseRound = isMyself ? "rounded-l-3xl rounded-r-lg" : "rounded-r-3xl rounded-l-lg";
    let topStyle, bottomStyle;
    let perUserSpace = "mt-[0.1rem] md:mt-1";

    if (isFirstInSequence || isDelayed) {
      topStyle = isMyself ? "rounded-tr-3xl" : "rounded-tl-3xl";
      perUserSpace = isFirstInSequence ? "mt-6" : "mt-3";
    }
    if (isLastInSequence || isNextDelayed) {
      bottomStyle = isMyself ? "rounded-br-3xl" : "rounded-bl-3xl";
    }

    let roundStyle = `${baseRound} ${topStyle} ${bottomStyle}`;
    return { roundStyle, perUserSpace };
  }, [isDelayed, isFirstInSequence, isLastInSequence, isMyself, isNextDelayed]);

  const emojiStyle =
    isOnlyEmoji(message.message) &&
    `text-4xl leading-tight bg-none border-none px-0 ${!isMyself && "ml-6"}`;
  const myStyle =
    "bg-gradient-to-br from-purple-700 to-blue-700 text-white md:bg-none md:text-gray-700 md:bg-gray-200";
  const othersStyle = "md:bg-white text-gray-700 bg-gray-200 ml-6";

  const messageStyle = emojiStyle || (isMyself ? myStyle : othersStyle);
  const layout = isMyself ? "justify-end text-end" : "justify-start text-start";
  const { roundStyle, perUserSpace } = getMessageStyle();

  return (
    <li className={`first:mt-auto w-full relative col-center-v group`}>
      {showSendDate && <MessageDate date={message.sentAt?.seconds * 1000} />}

      <div className={`row-center-v ${perUserSpace} ${layout}`}>
        <div
          className={`max-w-[80%] lg:max-w-[45%] px-4 py-2 border order-2 ${roundStyle} ${messageStyle}`}
        >
          <span>{applyLineBreaks(message.message)}</span>
        </div>

        {isLastInSequence && !isMyself && (
          <MyImg
            src={message.sender.image}
            size={0.5}
            rounded
            className="absolute bottom-0 -left-1 md:-left-2"
          />
        )}

        <span className={`hidden group-hover:flex space-x-3 ${isMyself ? "order-1" : "order-3"}`}>
          <MessageDate
            date={message.sentAt?.seconds * 1000}
            className={`pt-0 ${isMyself && "order-2"}`}
          />
          <MoreActions messageId={message.id} />
          <ReplyToMessage messageId={message.id} />
        </span>
      </div>
    </li>
    // {message.sender}
  );
};

export default Message;
