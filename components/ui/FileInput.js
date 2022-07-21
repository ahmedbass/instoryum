import { useRef } from "react";
import { ACCEPTED_POST_FILES } from "../../constants";

const FileInput = ({ onSelect, children, accept = ACCEPTED_POST_FILES }) => {
  const ref = useRef();
  return (
    <label>
      <input
        type="file"
        multiple
        accept={accept}
        ref={ref}
        className="hidden"
        onChange={onSelect}
      />
      <div onClick={() => ref.current.click()}>{children}</div>
    </label>
  );
};

export default FileInput;
