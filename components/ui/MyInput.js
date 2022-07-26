import { useLayoutEffect, useRef } from "react";

const MIN_TEXTAREA_HEIGHT = 36;
const MyInput = ({ placeholder, value, onChange, onEnter, className, maxHeight = 120 }) => {
  const ref = useRef();

  useLayoutEffect(() => {
    ref.current.style.height = "inherit"; // Reset height - important to shrink on delete
    ref.current.style.height = `${Math.max(ref.current.scrollHeight, MIN_TEXTAREA_HEIGHT)}px`;
  }, [value]);

  const handleEnterKey = (e) => {
    if (e.key !== "Enter") return;
    if (e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    onEnter();
  };

  return (
    <textarea
      ref={ref}
      rows={1}
      className={`flex-grow p-2 outline-none resize-none leading-tight scrollbar-none ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={handleEnterKey}
      style={{ maxHeight }}
    />
  );
};
export default MyInput;
