import {useCallback, useState} from "react";
import Cropper from "react-easy-crop";
import {useRecoilState} from "recoil";
import {
  postAspectRatio,
  selectedImageIndex,
  selectedImages,
} from "../../../atom/CreatePostModalAtom";
import {MY_SCROLL} from "../../ui/Layout";

const HeroImage = () => {
  const [showGrid, setShowGrid] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const [selectedFiles, setSelectedFiles] = useRecoilState(selectedImages);
  const [heroIndex, setHeroIndex] = useRecoilState(selectedImageIndex);
  const image = selectedFiles[heroIndex || 0];

  const [aspectRatio, setAspectRatio] = useRecoilState(postAspectRatio);

  const handleUpdateZoom = (zoom) => {
    const newFiles = [...selectedFiles];
    newFiles[heroIndex] = {...image, zoom};
    setSelectedFiles(newFiles);
  };

  const handleUpdateCrop = (crop, index = heroIndex) => {
    const newFiles = [...selectedFiles];
    newFiles[index] = {...image, crop};
    setSelectedFiles(newFiles);
  };

  const onCropComplete = useCallback(
      (croppedArea, croppedAreaPixels) => {
        const newFiles = [...selectedFiles];
        newFiles[heroIndex] = {...image, croppedAreaPixels};
        setSelectedFiles(newFiles);
        // console.log({croppedArea, croppedAreaPixels}, "<<<<< onCropComplete");
      },
      [heroIndex, image, selectedFiles, setSelectedFiles]
  );

  if (!image) return;
  return (
      <div
          className={`relative w-full h-full max-w-full max-h-full ${MY_SCROLL} `}
          onMouseDown={setIsPressed.bind(this, true)}
          onMouseUp={setIsPressed.bind(this, false)}
          onMouseOut={setIsPressed.bind(this, false)}
      >
        <Cropper
            image={image.type?.includes("image") && image.src}
            video={image.type?.includes("video") && image.src}
            zoom={image.zoom}
            aspect={aspectRatio}
            crop={image.crop}
            rotation={0}
            onZoomChange={handleUpdateZoom}
            onCropChange={handleUpdateCrop}
            onCropComplete={onCropComplete}
            showGrid={showGrid}
            onInteractionStart={setShowGrid.bind(this, true)}
            onInteractionEnd={setShowGrid.bind(this, false)}
            zoomSpeed={1}
            minZoom={1}
            maxZoom={2}
            zoomWithScroll={true}
            restrictPosition={true}
            objectFit="horizontal-cover"
            style={{mediaStyle: !isPressed ? {filter: image.filterString} : ""}}
            classes={{
              containerClassName: `bg-gray-500`,
              mediaClassName: `${isPressed ? "cursor-grabbing" : "cursor-grab"}`,
              cropAreaClassName: `${isPressed ? "cursor-grabbing" : "cursor-grab"}`,
            }}
            // objectFit={aspectRatio > 1 ? "horizontal-cover" : "vertical-cover"}
        />
      </div>
  );
};

export default HeroImage;
