import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  createPostStep,
  modalState,
  postAspectRatio,
  postCaption,
  postLocation,
  selectedImageIndex,
  selectedImages,
} from "../../atom/CreateNewPostAtom";
import { HeaderTabsAtom } from "../../atom/HeaderTabsAtom";
import { MAX_FILES_PER_POST } from "../../lib/constants";
import ConfirmDiscardPopup from "./ConfirmDiscardPopup";
import DragAndDrop from "./DragAndDrop";
import Header from "./Header";
import ImageEditor from "./StepOne_ImageEditing/ImageEditor";
import ImageFilters, { defaultFilters } from "./StepOne_ImageEditing/ImageFilters";
import ImageOutput from "./StepTwo_PostUpload/ImageOutput";
import InfoSection from "./StepTwo_PostUpload/InfoSection";

const CreateNewPost = ({ onBlur }) => {
  const [open, setOpen] = useRecoilState(modalState);
  const [creationStep, setCreationStep] = useRecoilState(createPostStep);
  const [selectedFiles, setSelectedFiles] = useRecoilState(selectedImages);
  const [aspectRatio, setAspectRatio] = useRecoilState(postAspectRatio);
  const setHeroIndex = useSetRecoilState(selectedImageIndex);
  const setCaption = useSetRecoilState(postCaption);
  const setLocation = useSetRecoilState(postLocation);

  const [showConfirmDiscard, setShowConfirmDiscard] = useState(false);
  const [closeOnDiscard, setCloseOnDiscard] = useState(true);

  useEffect(() => {
    setHeroIndex(selectedFiles.length - 1);
    !selectedFiles.length && setCreationStep(0);
  }, [selectedFiles.length]);

  const calcCroppedArea = (width, height) => {
    let newWidth, newHeight;
    if (width > height) {
      newWidth = height * aspectRatio;
      newHeight = height;
    } else {
      newWidth = width;
      newHeight = width * aspectRatio;
    }
    const middleX = (width - newWidth) / 2;
    const middleY = (height - newHeight) / 2;
    return { x: middleX, y: middleY, width: newWidth, height: newHeight };
  };

  const buildImageObject = (file) =>
    new Promise((resolve, reject) => {
      const imgObj = new Image();
      imgObj.src = URL.createObjectURL(file);
      imgObj.onload = () => {
        resolve({
          src: imgObj.src,
          width: imgObj.width,
          height: imgObj.height,
          type: file.type,
          croppedAreaPixels: calcCroppedArea(imgObj.width, imgObj.height),
          crop: { x: 0, y: 0 },
          zoom: 1,
          filters: defaultFilters,
          filterString: "",
        });
      };
      imgObj.onerror = reject;
    });

  const ignoreExtraFiles = (files) => {
    //this function ignores uploaded files over the specified max per post
    const extras = selectedFiles.length + files.length - MAX_FILES_PER_POST;
    if (extras > 0) files.splice(files.length - extras, extras);
    return files;
  };

  const addSelectedImages = async (filesObj) => {
    if (filesObj?.target?.files) filesObj = filesObj.target.files;
    if (!filesObj) return;

    setCreationStep(1);

    let filesArray = ignoreExtraFiles(Array.from(filesObj));
    let images = await Promise.all(filesArray.map((file) => buildImageObject(file)));
    setSelectedFiles((prevFiles) => (prevFiles?.length ? prevFiles.concat(images) : images));
    filesArray.map((file) => URL.revokeObjectURL(file));
  };

  const removeFromSelection = (file) =>
    setSelectedFiles(selectedFiles.filter((existing) => file !== existing));

  const clearSelection = () => {
    setShowConfirmDiscard(true);
    setCloseOnDiscard(false);
  };

  const requestModalClose = () => {
    setCloseOnDiscard(true);
    if (selectedFiles.length) setShowConfirmDiscard(true);
    else discardPost();
  };

  const onShareComplete = () => {
    setCloseOnDiscard(true);
    discardPost();
  };

  const discardPost = () => {
    setShowConfirmDiscard(false);
    setCreationStep(0);
    setSelectedFiles([]);
    setCaption("");
    setLocation("");
    setAspectRatio(1);

    if (closeOnDiscard) {
      setOpen(false);
      onBlur();
    }
  };

  return (
    <>
      <Modal
        isOpen={open}
        onRequestClose={requestModalClose}
        contentLabel="Create new post modal"
        shouldReturnFocusAfterClose={false}
        overlayClassName="modal-overlay"
        ariaHideApp={false}
        shouldFocusAfterRender={true}
        className={`absolute-center w-screen h-screen md:w-fit md:h-[80%] md:max-h-[50rem] 
        flex flex-col bg-white border md:rounded-2xl md:overflow-hidden`}
      >
        <Header onRequestClose={requestModalClose} />

        {creationStep === 0 && <DragAndDrop onSelect={addSelectedImages} />}
        {(creationStep === 1 || creationStep === 2) && (
          <div className="relative bg-gray-100 flex flex-col md:flex-row flex-grow w-full h-full md:h-[80%] md:max-h-[50rem]">
            {creationStep === 1 && (
              <>
                <ImageEditor
                  addToSelection={addSelectedImages}
                  clearSelection={clearSelection}
                  removeFromSelection={removeFromSelection}
                  calcCroppedArea={calcCroppedArea}
                />
                <ImageFilters />
              </>
            )}
            {creationStep === 2 && (
              <>
                <ImageOutput />
                <InfoSection onShareComplete={onShareComplete} />
              </>
            )}
          </div>
        )}
      </Modal>

      <ConfirmDiscardPopup
        isOpen={showConfirmDiscard}
        onConfirm={discardPost}
        onCancel={setShowConfirmDiscard.bind(this, false)}
      />
    </>
  );
};
export default CreateNewPost;
