import { TbRectangle, TbRectangleVertical, TbSquare } from "react-icons/tb";
import MyIcon from "../../ui/MyIcon";
import { useRecoilState } from "recoil";
import { postAspectRatio, selectedImages } from "../../../atom/CreateNewPostAtom";
import { useEffect } from "react";

const aspects = [
  // { name: "Original", aspect: 0 },
  { name: "1:1", value: 1, icon: TbSquare },
  { name: "4:5", value: 4 / 5, icon: TbRectangleVertical },
  // { name: "16:9", value: 16 / 9, icon: TbRectangle },
  { name: "16:10", value: 16 / 10, icon: TbRectangle },
];

const AspectRatioControl = ({ calcCroppedAreaPixels }) => {
  const [aspectRatio, setAspectRatio] = useRecoilState(postAspectRatio);
  const [selectedFiles, setSelectedFiles] = useRecoilState(selectedImages);

  useEffect(() => {
    const updatedFiles = selectedFiles.map((file) => ({
      ...file,
      croppedAreaPixels: calcCroppedAreaPixels(file.width, file.height),
    }));
    setSelectedFiles(updatedFiles);
  }, [aspectRatio]);

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
