import { useState } from "react";
import MyIcon from "../../ui/MyIcon";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

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

const PostSettings = () => {
  const [expand, setExpand] = useState(false);
  const [hideLikesCount, setHideLikesCount] = useState(false);
  const [turnOffCommenting, setTurnOffCommenting] = useState(false);

  const settingsList = [
    {
      title: "Hide like and view counts on this post",
      description:
        "Only you will see the total number of likes and views on this post. You can change this later by going to the ··· menu at the top of the post. To hide like counts on other people's posts, go to your account settings.",
      value: hideLikesCount,
      setValue: setHideLikesCount,
    },
    {
      title: "Turn off commenting",
      description: "You can change this later by going to the ··· menu at the top of your post.",
      value: turnOffCommenting,
      setValue: setTurnOffCommenting,
    },
  ];
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
          {settingsList.map((setting) => (
            <Setting
              key={setting.title}
              title={setting.title}
              description={setting.description}
              value={setting.value}
              setValue={setting.setValue.bind(this, !setting.value)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PostSettings;
