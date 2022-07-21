import { useEffect, useRef } from "react";
import Image from "next/image";
import FloatingIcon from "../../ui/FloatingIcon";
import { MdClose } from "react-icons/md";
import { MAX_FILES_PER_POST } from "../../../constants";
import FileInput from "../../ui/FileInput";
import { VscAdd } from "react-icons/vsc";
import { useRecoilState } from "recoil";
import { selectedImageIndex, selectedImages } from "../../../atom/CreateNewPostAtom";

const AddImageButton = ({ onSelect }) => (
  <li>
    <FileInput onSelect={onSelect}>
      <FloatingIcon icon={VscAdd} size={3} />
    </FileInput>
  </li>
);

const RemoveImageButton = ({ onClick }) => (
  <FloatingIcon
    icon={MdClose}
    onClick={onClick}
    className="p-0.5 absolute top-0.5 right-0.5"
    size={1}
  />
);

const Video = ({ onClick, src }) => (
  <video
    width={85}
    height={85}
    onClick={onClick}
    style={{
      width: 85,
      height: 85,
      borderRadius: "0.5rem",
      objectFit: "cover",
      marginBottom: 5,
    }}
  >
    <source src={src} />
  </video>
);

const ImageEl = ({ onClick, src, alt, isActive }) => (
  <Image
    src={src}
    alt={alt}
    width={85}
    height={85}
    layout="fixed"
    objectFit="cover"
    className={`rounded-lg ${!isActive && "brightness-[65%]"}`}
    onClick={onClick}
  />
);

const Thumbnails = ({ removeFromSelection, addToSelection }) => {
  const [images, setImages] = useRecoilState(selectedImages);
  const [heroIndex, setHeroIndex] = useRecoilState(selectedImageIndex);

  const ref = useRef();
  useEffect(() => ref.current?.scrollIntoView({ behavior: "smooth" }), [images]);

  return (
    <ul
      className="absolute bottom-16 right-4 row-center-v max-w-[90%] overflow-x-auto scrollbar-none
    p-2 space-x-4 rounded-lg bg-black/50 z-10"
    >
      {images.map((image, i) => (
        <li key={image.src + i} className="relative cursor-pointer -mb-1">
          {image.type.includes("video") ? (
            <Video onClick={setHeroIndex.bind(this, i)} src={image.src + "#t=0.1"} />
          ) : (
            <ImageEl
              src={image.src}
              alt={`picture-${i}`}
              onClick={setHeroIndex.bind(this, i)}
              isActive={heroIndex === i}
            />
          )}

          {heroIndex === i && <RemoveImageButton onClick={removeFromSelection.bind(this,image)} />}
        </li>
      ))}

      {images.length < MAX_FILES_PER_POST && <AddImageButton onSelect={addToSelection} />}
      <li ref={ref}></li>
    </ul>
  );
};

export default Thumbnails;
