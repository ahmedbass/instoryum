import MyButton from "../ui/MyButton";
import MyCloseIcon from "../ui/MyCloseIcon";
import getCroppedImg from "./StepOne_ImageEditing/cropImage";
import { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { createPostStep, processedImages, selectedImages } from "../../atom/CreateNewPostAtom";

const CloseButton = ({ onClick }) => (
  <MyButton className="absolute top-2 right-3" onClick={onClick}>
    <MyCloseIcon hover={false} clickable />
  </MyButton>
);

const NavButton = ({ text, onClick, disabled }) => (
  <MyButton className="absolute top-2 left-4" onClick={onClick} disabled={disabled}>
    {text}
  </MyButton>
);

const Title = ({ title }) => (
  <h1 className="p-2 font-bold text-center text-lg text-black border-b border-gray-300 w-full">
    {title}
  </h1>
);

const Header = ({ onRequestClose }) => {
  const [nextLoading, setNextLoading] = useState(false);
  const [creationStep, setCreationStep] = useRecoilState(createPostStep);
  const selectedFiles = useRecoilValue(selectedImages);
  const setOutputImages = useSetRecoilState(processedImages);

  const moveBack = () => setCreationStep(1);

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
      <Title title={creationStep === 1 ? "Edit" : "Create new post"} />
      <CloseButton onClick={onRequestClose} />
      {creationStep === 1 && (
        <NavButton
          onClick={saveAndMoveNext}
          text={nextLoading ? "Loading..." : "Next"}
          disabled={nextLoading}
        />
      )}
      {creationStep === 2 && <NavButton text="Back" onClick={moveBack} />}
    </>
  );
};
export default Header;
