import MyIcon from "../../ui/MyIcon";
import { VscSmiley } from "react-icons/vsc";
import { formatNumber } from "../../../lib/utils";
import { useRecoilState } from "recoil";
import { postCaption } from "../../../atom/CreateNewPostAtom";

const Caption = () => {
  const maxCaption = 2200
  const [caption, setCaption] = useRecoilState(postCaption);
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

export default Caption;
