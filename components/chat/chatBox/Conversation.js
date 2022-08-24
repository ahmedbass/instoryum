import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { currentUserAtom } from "../../../atom/CurrentUserAtom";
import { useCollectionListener } from "../../../lib/myHooks";
import { getDateDistance } from "../../../lib/utils";
import { MY_SCROLL } from "../../ui/Layout";
import Message from "./Message";

const fakeConversation = [
  {
    message: "nice",
    sentAt: {
      seconds: 1659275509,
      nanoseconds: 809000000,
    },
    sender: "RwT4Es3ZgEVeRowO0kLVnQfL0N73",
    type: "text",
    id: "7u9cViXlzogIJ1Vz8D4w",
  },
  {
    sender: "RwT4Es3ZgEVeRowO0kLVnQfL0N73",
    sentAt: {
      seconds: 1659275476,
      nanoseconds: 66000000,
    },
    message: "no?",
    type: "text",
    id: "8xifUKfu2lxnf1PqVnVd",
  },
  {
    message: "yes",
    sender: "RwT4Es3ZgEVeRowO0kLVnQfL0N73",
    type: "text",
    sentAt: {
      seconds: 1659275448,
      nanoseconds: 361000000,
    },
    id: "CH9I3pLBfXHEdGI0RpRr",
  },
  {
    sender: "RwT4Es3ZgEVeRowO0kLVnQfL0N73",
    sentAt: {
      seconds: 1659275405,
      nanoseconds: 35000000,
    },
    message: "hello",
    type: "text",
    id: "hqwThsmMJkhm0sGPElqW",
  },
  {
    sentAt: {
      seconds: 1659208971,
      nanoseconds: 137000000,
    },
    sender: "5CePFQEn5CXJmBcabZyJ1FvPd5j1",
    message: "hiii",
    type: "text",
    id: "AGN08rJWD1TImSeXYU2D",
  },
];
const fakeConversation2 = [
  {
    type: "text",
    sender: "wNGSoTbnACayiJEUu4zU8D0BvU33",
    sentAt: {
      seconds: 1659344416,
      nanoseconds: 878000000,
    },
    message: "wow nice",
    id: "2MqPpJYw3gw5AAciyP5B",
  },
  {
    message: "hello",
    sender: "wNGSoTbnACayiJEUu4zU8D0BvU33",
    sentAt: {
      seconds: 1659344392,
      nanoseconds: 883000000,
    },
    type: "text",
    id: "tP1FbYQDhyN0MbeNUq3k",
  },
  {
    type: "text",
    sender: "RwT4Es3ZgEVeRowO0kLVnQfL0N73",
    sentAt: {
      seconds: 1659337235,
      nanoseconds: 684000000,
    },
    message: "!",
    id: "mzulbl9axSvkoY0lpcat",
  },
  {
    message: "!",
    type: "text",
    sentAt: {
      seconds: 1659337235,
      nanoseconds: 627000000,
    },
    sender: "RwT4Es3ZgEVeRowO0kLVnQfL0N73",
    id: "EWGuhxANeteWAqVRn7Wv",
  },
  {
    message: "it does?",
    type: "text",
    sender: "RwT4Es3ZgEVeRowO0kLVnQfL0N73",
    sentAt: {
      seconds: 1659337235,
      nanoseconds: 558000000,
    },
    id: "hIcGlxyZ9nlBRGMJF6Fb",
  },
  {
    type: "text",
    sender: "RwT4Es3ZgEVeRowO0kLVnQfL0N73",
    message: "!",
    sentAt: {
      seconds: 1659337235,
      nanoseconds: 500000000,
    },
    id: "vr9nZ8mGoNaxy6Io9XwT",
  },
  {
    sentAt: {
      seconds: 1659337235,
      nanoseconds: 443000000,
    },
    message: "wow it works!",
    sender: "RwT4Es3ZgEVeRowO0kLVnQfL0N73",
    type: "text",
    id: "PhLteSNB4g3MIXVeE7Z9",
  },
  {
    sender: "RwT4Es3ZgEVeRowO0kLVnQfL0N73",
    message: "😮😮😮😮",
    sentAt: {
      seconds: 1659337235,
      nanoseconds: 422000000,
    },
    type: "text",
    id: "nr8vmopaKtiK8H6Scdfk",
  },
  {
    type: "text",
    sentAt: {
      seconds: 1659337235,
      nanoseconds: 357000000,
    },
    message: "okay we're there now",
    sender: "RwT4Es3ZgEVeRowO0kLVnQfL0N73",
    id: "KKrsOhnHB9GihCtyMVwW",
  },
  {
    type: "text",
    message: "come ooooon 😭🙏",
    sentAt: {
      seconds: 1659337235,
      nanoseconds: 293000000,
    },
    sender: "RwT4Es3ZgEVeRowO0kLVnQfL0N73",
    id: "Mt1WXNUQ0hZ0GADbkgzg",
  },
  {
    sender: "RwT4Es3ZgEVeRowO0kLVnQfL0N73",
    sentAt: {
      seconds: 1659337235,
      nanoseconds: 231000000,
    },
    type: "text",
    message: "are we there yet?",
    id: "a6ibokBMBjNa1mV1gPhm",
  },
  {
    sentAt: {
      seconds: 1659337235,
      nanoseconds: 175000000,
    },
    sender: "RwT4Es3ZgEVeRowO0kLVnQfL0N73",
    type: "text",
    message: "we're almost there guys!",
    id: "tf1fIUPXbuejTszHdtWH",
  },
  {
    sentAt: {
      seconds: 1659337235,
      nanoseconds: 106000000,
    },
    message: "let's try a few more times",
    type: "text",
    sender: "RwT4Es3ZgEVeRowO0kLVnQfL0N73",
    id: "X4S86EIy8a3hob3vBoNn",
  },
  {
    sender: "RwT4Es3ZgEVeRowO0kLVnQfL0N73",
    type: "text",
    sentAt: {
      seconds: 1659337235,
      nanoseconds: 41000000,
    },
    message: "okay we gotta make this overflow the screen to be able to scroll",
    id: "kUoN6Qz8YL6Jw1tiQ7Ek",
  },
  {
    sentAt: {
      seconds: 1659337234,
      nanoseconds: 983000000,
    },
    type: "text",
    message: "hope eveything is okay",
    sender: "RwT4Es3ZgEVeRowO0kLVnQfL0N73",
    id: "M1RbBsNVPqi7SdYB92Ix",
  },
  {
    sentAt: {
      seconds: 1659337234,
      nanoseconds: 921000000,
    },
    sender: "RwT4Es3ZgEVeRowO0kLVnQfL0N73",
    type: "text",
    message: "what's up",
    id: "wfmWXzXkDyy4sWaPzToK",
  },
  {
    sentAt: {
      seconds: 1659337234,
      nanoseconds: 861000000,
    },
    message: "hello?",
    type: "text",
    sender: "RwT4Es3ZgEVeRowO0kLVnQfL0N73",
    id: "1EF8JKfK17NUBWDgdfA9",
  },
  {
    sentAt: {
      seconds: 1659275509,
      nanoseconds: 809000000,
    },
    sender: "RwT4Es3ZgEVeRowO0kLVnQfL0N73",
    message: "nice",
    type: "text",
    id: "7u9cViXlzogIJ1Vz8D4w",
  },
  {
    sentAt: {
      seconds: 1659275476,
      nanoseconds: 66000000,
    },
    type: "text",
    sender: "RwT4Es3ZgEVeRowO0kLVnQfL0N73",
    message: "no?",
    id: "8xifUKfu2lxnf1PqVnVd",
  },
  {
    type: "text",
    sender: "RwT4Es3ZgEVeRowO0kLVnQfL0N73",
    sentAt: {
      seconds: 1659275448,
      nanoseconds: 361000000,
    },
    message: "yes",
    id: "CH9I3pLBfXHEdGI0RpRr",
  },
  {
    sender: "RwT4Es3ZgEVeRowO0kLVnQfL0N73",
    sentAt: {
      seconds: 1659275405,
      nanoseconds: 35000000,
    },
    message: "hello",
    type: "text",
    id: "hqwThsmMJkhm0sGPElqW",
  },
  {
    sentAt: {
      seconds: 1659208971,
      nanoseconds: 137000000,
    },
    message: "hiii",
    type: "text",
    sender: "5CePFQEn5CXJmBcabZyJ1FvPd5j1",
    id: "AGN08rJWD1TImSeXYU2D",
  },
].reverse();

const SIX_HOURS_IN_SEC = 21600;
const ONE_MINUTE_IN_SEC = 60;

const Conversation = ({ chatId }) => {
  const conversation = useCollectionListener({
    path: `chats/${chatId}/messages`,
    order: { by: "sentAt" },
    limitNum: 30,
  });
  const currentUser = useRecoilValue(currentUserAtom);
  const lastMessage = conversation[conversation.length - 1]?.message;
  console.log({ conversation });

  const messageEndRef = useRef();
  const scrollToBottom = (behavior = "smooth") =>
    messageEndRef.current?.scrollIntoView({ behavior: behavior });
  useEffect(() => scrollToBottom("auto"), [conversation]);
  useEffect(() => {
    lastMessage?.sender === currentUser.id && scrollToBottom();
  }, [currentUser?.id, lastMessage]);

  if (!conversation?.length) return;
  return (
    <ul className={`col-center-h flex-grow px-3 md:px-6 pt-4 ${MY_SCROLL}`}>
      {conversation.map((message, i, messages) => {
        const prevDiff = Math.abs(message.sentAt?.seconds - messages[i - 1]?.sentAt?.seconds);
        const nextDiff = Math.abs(message.sentAt?.seconds - messages[i + 1]?.sentAt?.seconds);
        return (
          <Message
            key={message.id}
            message={message}
            isMyself={message.sender === currentUser.id}
            isFirstInSequence={message.sender !== messages[i - 1]?.sender}
            isLastInSequence={message.sender !== messages[i + 1]?.sender}
            isDelayed={prevDiff > ONE_MINUTE_IN_SEC}
            isNextDelayed={nextDiff > ONE_MINUTE_IN_SEC}
            showSendDate={i === 0 || prevDiff >= SIX_HOURS_IN_SEC}
          />
        );
      })}

      <li ref={messageEndRef} className="text-sm text-gray-500 self-end mx-2">
        {lastMessage?.sender === currentUser.id &&
          lastMessage.seenAt &&
          `Seen ${getDateDistance(conversation[conversation.length - 1].seenAt, true)} ago`}
      </li>
    </ul>
  );
};

export default Conversation;
