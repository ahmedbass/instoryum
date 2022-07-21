import { MY_SCROLL } from "../ui/Layout";
import MyImg from "../ui/MyImg";
import { useState } from "react";
import MyIcon from "../ui/MyIcon";
import { VscSmiley } from "react-icons/vsc";
import { formatNumber } from "../../utils";
import { RiMapPin2Line } from "react-icons/ri";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import MyButton from "../ui/MyButton";

const UserInfo = ({ src, username }) => (
  <div className="row-center-v space-x-4 p-4">
    <MyImg src={src} size={1} rounded />
    <h3 className="font-semibold text-lg">{username}</h3>
  </div>
);

const CaptionArea = ({ maxCaption }) => {
  const [caption, setCaption] = useState("");
  return (
    <>
      <textarea
        name="caption"
        rows="7"
        maxLength={maxCaption}
        placeholder="Write a caption..."
        className="w-full resize-none outline-none text-lg  px-4 placeholder-gray-500 focus:placeholder-gray-300"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />

      <div className="row-center-v justify-between border-b border-gray-300 px-4 pb-3">
        <MyIcon Icon={VscSmiley} className="text-gray-400" />
        <p className="text-xs text-gray-400">
          <span>{formatNumber(caption.length)}</span>/{formatNumber(maxCaption)}
        </p>
      </div>
    </>
  );
};

const AddLocation = () => {
  return (
    <div className="w-full border-b border-gray-300 row-center-v px-4">
      <input
        type="text"
        placeholder="Add location"
        className="text-lg py-3 flex-grow outline-none placeholder-gray-400 focus:placeholder-gray-300"
      />
      <MyIcon Icon={RiMapPin2Line} size={2} />
    </div>
  );
};

const Setting = ({ title, description, value, setValue }) => {
  return (
    <div className="space-y-2 max-w-fit">
      <label className="text-lg inline-block space-x-1">
        <span>{title}</span>
        <input type="checkbox" checked={value} onChange={(e) => setValue(e.target.checked)} />
      </label>
      <p className="text-sm">{description}</p>
    </div>
  );
};

const AdvancedSettings = () => {
  const [expand, setExpand] = useState(false);
  const [hideLikesCount, setHideLikesCount] = useState(false);
  const [turnOffCommenting, setTurnOffCommenting] = useState(false);

  return (
    <div
      className={`w-full flex flex-col px-4 text-gray-700 ${!expand && "border-b border-gray-300"}`}
    >
      <div className="row-center-v py-3" onClick={setExpand.bind(this, !expand)}>
        <p className={`flex-grow text-lg cursor-pointer ${expand && "font-semibold"}`}>
          Advanced settings
        </p>
        <MyIcon Icon={expand ? MdExpandLess : MdExpandMore} />
      </div>

      {expand && (
        <div className="space-y-6 h-fit">
          <Setting
            title="Hide like and view counts on this post"
            description="Only you will see the total number of likes and views on this post. You can change this later by going to the ··· menu at the top of the post. To hide like counts on other people's posts, go to your account settings."
            value={hideLikesCount}
            setValue={setHideLikesCount}
          />

          <Setting
            title="Turn off commenting"
            description="You can change this later by going to the ··· menu at the top of your post."
            value={turnOffCommenting}
            setValue={setTurnOffCommenting}
          />
        </div>
      )}
    </div>
  );
};

const SharePost = () => {
  return (
    <div className="flex-grow mt-10 flex items-end p-2">
      <MyButton filled responsive onClick={() => console.log("SHARE POST")}>
        Share
      </MyButton>
    </div>
  );
};

const InfoSection = () => {
  return (
    <section
      className={`w-full md:w-[30vw] md:max-w-[25rem] h-full bg-white border-l border-gray-300 flex flex-col ${MY_SCROLL}`}
    >
      <UserInfo username="username" />
      <CaptionArea maxCaption={2200} />
      <AddLocation />
      <AdvancedSettings />
      <SharePost />
    </section>
  );
};
export default InfoSection;
