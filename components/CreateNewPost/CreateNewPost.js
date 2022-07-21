import { useRecoilState, useSetRecoilState } from "recoil";
import {
  createPostStep,
  modalState,
  postAspectRatio,
  postCaption,
  postLocation,
  processedImages,
  selectedImageIndex,
  selectedImages,
} from "../../atom/CreateNewPostAtom";
import Modal from "react-modal";
import MyButton from "../ui/MyButton";
import { useEffect, useState } from "react";
import MyCloseIcon from "../ui/MyCloseIcon";
import ImageEditor from "./StepOne_ImageEditing/ImageEditor";
import { MAX_FILES_PER_POST } from "../../constants";
import ConfirmDiscardPopup from "./ConfirmDiscardPopup";
import ImageFilters, { defaultFilters } from "./StepOne_ImageEditing/ImageFilters";
import DragAndDrop from "./DragAndDrop";
import getCroppedImg from "./StepOne_ImageEditing/cropImage";
import ImageOutput from "./StepTwo_PostUpload/ImageOutput";
import InfoSection from "./StepTwo_PostUpload/InfoSection";

const CloseButton = ({ onClick }) => (
  <MyButton className="absolute top-2 right-3" onClick={onClick}>
    <MyCloseIcon hover={false} clickable />
  </MyButton>
);

const NavButton = ({ text, onClick, disabled }) => {
  return (
    <MyButton className="absolute top-2 left-4" onClick={onClick} disabled={disabled}>
      {text}
    </MyButton>
  );
};

const Header = ({ title }) => (
  <h1 className="p-2 font-bold text-center text-lg text-black border-b border-gray-300 w-full">
    {title}
  </h1>
);

const CreateNewPost = () => {
  const [open, setOpen] = useRecoilState(modalState);
  const [creationStep, setCreationStep] = useRecoilState(createPostStep);
  const [aspectRatio, setAspectRatio] = useRecoilState(postAspectRatio);
  const [selectedFiles, setSelectedFiles] = useRecoilState(selectedImages);
  const [heroIndex, setHeroIndex] = useRecoilState(selectedImageIndex);
  const [outputImages, setOutputImages] = useRecoilState(processedImages);
  const [showConfirmDiscard, setShowConfirmDiscard] = useState(false);
  const [closeOnDiscard, setCloseOnDiscard] = useState(true);
  const [nextLoading, setNextLoading] = useState(false);
  const setCaption = useSetRecoilState(postCaption);
  const setLocation = useSetRecoilState(postLocation);

  useEffect(() => {
    setHeroIndex(selectedFiles.length - 1);
    !selectedFiles.length && setCreationStep(0);
  }, [selectedFiles.length, setCreationStep, setHeroIndex]);

  useEffect(() => {
    const updatedFiles = selectedFiles.map((file) => ({
      ...file,
      croppedAreaPixels: calcCroppedAreaPixels(file.width, file.height),
    }));
    setSelectedFiles(updatedFiles);
  }, [aspectRatio]);

  const calcCroppedAreaPixels = (width, height) => {
    let newWidth, newHeight;
    if (width > height) {
      newWidth = height * aspectRatio;
      newHeight = height;
    } else {
      newWidth = width;
      newHeight = width * aspectRatio;
    }
    const x = (width - newWidth) / 2;
    const y = (height - newHeight) / 2;
    return { x: x, y: y, width: newWidth, height: newHeight };
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
          croppedAreaPixels: calcCroppedAreaPixels(imgObj.width, imgObj.height),
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

  const closeModal = () => {
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
    setSelectedFiles([]);
    setCreationStep(0);
    setCaption("");
    setLocation("");

    if (closeOnDiscard) setOpen(false);
  };

  const saveAndMoveNext = async () => {
    setNextLoading(true);
    try {
      const processedImages = await Promise.all(
        selectedFiles.map(
          async (file) => await getCroppedImg(file.src, file.croppedAreaPixels, file.filterString)
        )
      );
      setOutputImages(processedImages);
      setCreationStep(2);
    } catch (e) {
      console.error(e);
    }
    setNextLoading(false);
  };

  return (
    <>
      <Modal
        isOpen={open}
        onRequestClose={closeModal}
        contentLabel="Create new post modal"
        shouldReturnFocusAfterClose={false}
        overlayClassName="modal-overlay"
        ariaHideApp={false}
        shouldFocusAfterRender={true}
        className={`absolute-center w-screen h-screen md:w-fit md:h-[80%] md:max-h-[50rem] 
        flex flex-col bg-white border md:rounded-2xl md:overflow-hidden`}
      >
        <Header title={creationStep === 1 ? "Edit" : "Create new post"} />

        {creationStep === 0 && <DragAndDrop onSelect={addSelectedImages} />}
        {(creationStep === 1 || creationStep === 2) && (
          <div className="relative bg-gray-100 flex flex-col md:flex-row flex-grow w-full h-full md:h-[80%] md:max-h-[50rem]">
            {creationStep === 1 && (
              <>
                <ImageEditor
                  addToSelection={addSelectedImages}
                  clearSelection={clearSelection}
                  removeFromSelection={removeFromSelection}
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

        <CloseButton onClick={closeModal} />
        {creationStep === 1 && (
          <NavButton
            onClick={saveAndMoveNext}
            text={nextLoading ? "Loading..." : "Next"}
            disabled={nextLoading}
          />
        )}
        {creationStep === 2 && <NavButton text="Back" onClick={setCreationStep.bind(null, 1)} />}
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
