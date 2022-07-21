import {useCallback} from "react";
import {useDropzone} from "react-dropzone";
import MyIcon from "../ui/MyIcon";
import {UploadPostIcon} from "../icons";
import MyButton from "../ui/MyButton";

const DragAndDrop = ({onSelect}) => {
  // Do something with the files
  const onDrop = useCallback((acceptedFiles) => onSelect(acceptedFiles), [onSelect]);
  const {getRootProps, getInputProps, isDragActive, open} = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/webp": [],
      "video/mp4": [],
      "video/mpeg": [],
      "video/x-msvideo": [],
    },
    noClick: true,
  });

  return (
      <div
          {...getRootProps()}
          className="w-full md:w-[75vw] md:max-w-[45rem] flex-grow col-center text-center space-y-3 p-4"
      >
        <input {...getInputProps()} />
        <MyIcon
            Icon={UploadPostIcon}
            size={6}
            hover={false}
            className={`${isDragActive && "text-blue-500"}`}
        />
        <h2 className={`pb-2 text-2xl font-light text-gray-700 `}>Drag photos and videos here</h2>
        <MyButton filled onClick={open}>
          Select from computer
        </MyButton>
      </div>
  );
};
export default DragAndDrop;
