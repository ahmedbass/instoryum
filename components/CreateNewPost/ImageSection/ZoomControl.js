import { useRecoilState } from "recoil";
import { selectedImageIndex, selectedImages } from "../../../atom/CreatePostModalAtom";

const MIN = 1;
const MAX = 2;

const ZoomControl = () => {
  const [selectedFiles, setSelectedFiles] = useRecoilState(selectedImages);
  const [heroIndex, setHeroIndex] = useRecoilState(selectedImageIndex);
  const imageZoom = selectedFiles[heroIndex].zoom;

  const handleUpdateZoom = (e) => {
    const newFiles = [...selectedFiles];
    newFiles[heroIndex] = { ...newFiles[heroIndex], zoom: e.target.value };
    setSelectedFiles(newFiles);
  };

  return (
    <div className="absolute bottom-16 left-28 z-10 rounded-lg w-32 bg-black/50 flex p-4 box-content !w-28">
      <input
        type="range"
        className="appearance-none h-0.5 w-full"
        value={imageZoom}
        onChange={handleUpdateZoom}
        min={MIN}
        max={MAX}
        step={0.01}
      />
    </div>
  );
};
export default ZoomControl;
