import {useState} from "react";
import Thumbnails from "./Thumbnails";
import HeroImage from "./HeroImage";
import AspectRatioControl from "./AspectRatioControl";
import ZoomControl from "./ZoomControl";
import ImagesNav from "../../ui/ImagesNav";
import {useRecoilState} from "recoil";
import {selectedImageIndex, selectedImages} from "../../../atom/CreateNewPostAtom";
import DotCountIndicator from "../../ui/DotCountIndicator";
import ImageActionButtons from "./ImageActionButtons";

const ImageEditor = ({clearSelection, removeFromSelection, addToSelection, calcCroppedArea}) => {
  const [showAspectRatio, setShowAspectRatio] = useState(false);
  const [showZoom, setShowZoom] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(false);

  const [selectedFiles, setSelectedFiles] = useRecoilState(selectedImages);
  const [heroIndex, setHeroIndex] = useRecoilState(selectedImageIndex);
  const imagesLength = selectedFiles.length;

  return (
      <section
          className={`relative w-full md:w-[60vw] md:max-w-[50rem] h-1/2 md:h-full flex-grow `}>
        <HeroImage/>

        {showThumbnail && (
            <Thumbnails addToSelection={addToSelection} removeFromSelection={removeFromSelection}/>
        )}

        {showAspectRatio && <AspectRatioControl calcCroppedAreaPixels={calcCroppedArea}/>}

        {showZoom && <ZoomControl/>}

        <ImageActionButtons
            clearSelection={clearSelection}
            toggleShowAspectRatio={setShowAspectRatio.bind(this, !showAspectRatio)}
            toggleShowZoom={setShowZoom.bind(this, !showZoom)}
            toggleShowThumbnails={setShowThumbnail.bind(this, !showThumbnail)}
            isAspectRatioActive={showAspectRatio}
            isZoomActive={showZoom}
            isThumbnailsActive={showThumbnail}
        />

        <ImagesNav
            onPreviousClick={() => setHeroIndex(heroIndex > 0 ? heroIndex - 1 : 0)}
            onNextClick={() =>
                setHeroIndex(heroIndex < imagesLength - 1 ? heroIndex + 1 : imagesLength - 1)
            }
            previousDisabled={!heroIndex}
            nextDisabled={heroIndex === imagesLength - 1}
        />

        <DotCountIndicator count={imagesLength} currentActive={heroIndex}/>
      </section>
  );
};
export default ImageEditor;
