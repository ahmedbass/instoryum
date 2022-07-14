import MyImg from "./ui/MyImg";
import MyButton from "./ui/MyButton";
import Link from "next/link";
import About from "./About";

const suggestions = [
  {
    id: "f32",
    img: "https://i.pravatar.cc/150?img=40",
    username: "someone",
    snippet: "Follows you",
    actionName: "Follow",
  },
  {
    id: "f33",
    img: "https://i.pravatar.cc/150?img=43",
    username: "someone_else",
    snippet: "Followed by your_friend",
    actionName: "Follow",
  },
  {
    id: "f34",
    img: "https://i.pravatar.cc/150?img=33",
    username: "oh_another_one",
    snippet: "Follows your_close_friend",
    actionName: "Follow",
  },
  {
    id: "f35",
    img: "https://i.pravatar.cc/150?img=20",
    username: "somebody",
    snippet: "Follows you",
    actionName: "Follow",
  },
  {
    id: "f36",
    img: "https://i.pravatar.cc/150?img=48",
    username: "some_stranger",
    snippet: "New to my instagram",
    actionName: "Follow",
  },
];

const Rec = ({ img, imgSize = 1, username, snippet, actionName, actionOnClick }) => {
  return (
    <div className="grid grid-cols-[max-content_1fr_max-content] gap-x-4 items-center mb-2">
      <Link href={`/${username}`}>
        <a>
          <MyImg src={img} size={imgSize} rounded />
        </a>
      </Link>
      <div>
        <Link href={`/${username}`}>
          <a className="font-semibold truncate">{username}</a>
        </Link>
        <p className="text-gray-500 text-sm">{snippet}</p>
      </div>
      <MyButton text small onClick={actionOnClick}>
        {actionName}
      </MyButton>
    </div>
  );
};

const Suggestions = ({}) => {
  return (
    <div className="hidden lg:flex flex-col h-fit space-y-4 sticky top-20">
      <Rec
        img={"https://i.pravatar.cc/150?img=68"}
        imgSize={2}
        username={"ahmed__3d"}
        snippet={"Ahmed 3D"}
        actionName={"Logout"}
      />

      <div className="flex justify-between">
        <p className="font-semibold text-gray-500 col-span-2">Suggestions For You</p>
        <MyButton text small neutral>
          View all
        </MyButton>
      </div>

      <div className="grid">
        {suggestions.map((suggestion) => (
          <Rec
            key={suggestion.id}
            img={suggestion.img}
            username={suggestion.username}
            snippet={suggestion.snippet}
            actionName={suggestion.actionName}
          />
        ))}
      </div>

      <About />
    </div>
  );
};


export default Suggestions;
