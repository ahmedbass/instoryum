import FloatingIcon from "../../ui/FloatingIcon";
import { MdClose } from "react-icons/md";
import { BiExpandAlt, BiImages, BiZoomIn } from "react-icons/bi";

const ImageActionButtons = ({
  clearSelection,
  toggleShowAspectRatio,
  toggleShowZoom,
  toggleShowThumbnails,
  isAspectRatioActive,
  isZoomActive,
  isThumbnailsActive,
}) => (
  <div className="w-full absolute bottom-0 p-4 row-center-v space-x-3 justify-start pointer-events-none">
    <FloatingIcon icon={MdClose} onClick={clearSelection} />
    <FloatingIcon
      icon={BiExpandAlt}
      onClick={toggleShowAspectRatio}
      isActive={isAspectRatioActive}
    />
    <FloatingIcon icon={BiZoomIn} onClick={toggleShowZoom} isActive={isZoomActive} />
    <div className="flex-grow flex justify-end">
      <FloatingIcon icon={BiImages} onClick={toggleShowThumbnails} isActive={isThumbnailsActive} />
    </div>
  </div>
);

export default ImageActionButtons;
