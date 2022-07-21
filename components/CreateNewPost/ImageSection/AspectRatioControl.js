import { TbRectangle, TbRectangleVertical, TbSquare } from "react-icons/tb";
import MyIcon from "../../ui/MyIcon";
import { useRecoilState } from "recoil";
import { postAspectRatio } from "../../../atom/CreatePostModalAtom";

const aspects = [
  // { name: "Original", aspect: 0 },
  { name: "1:1", value: 1, icon: TbSquare },
  { name: "4:5", value: 4 / 5, icon: TbRectangleVertical },
  { name: "16:10", value: 16 / 10, icon: TbRectangle },
];

const AspectRatioControl = () => {
  const [aspectRatio, setAspectRatio] = useRecoilState(postAspectRatio);

  return (
    <ul className={`absolute bottom-16 left-16 z-10 rounded-lg w-32 bg-black/50`}>
      {aspects.map((a) => (
        <li
          key={a.name}
          onClick={setAspectRatio.bind(this, a.value)}
          className={`px-4 py-3 border-b border-white last:border-none font-semibold cursor-pointer ${
            aspectRatio === a.value ? "text-white" : "text-gray-400"
          } row-between`}
        >
          <p>{a.name}</p>
          <MyIcon
            Icon={a.icon}
            className={aspectRatio === a.value ? "text-white" : "text-gray-400"}
          />
        </li>
      ))}
    </ul>
  );
};

export default AspectRatioControl;
