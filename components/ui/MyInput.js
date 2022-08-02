import { useLayoutEffect, useRef } from "react";

const MIN_TEXTAREA_HEIGHT = 36;
const MyInput = ({ placeholder, value, onChange, onSubmit, className, maxHeight = 120 }) => {
  const ref = useRef();

  useLayoutEffect(() => {
    ref.current.style.height = "inherit"; // Reset height - important to shrink on delete
    ref.current.style.height = `${Math.max(ref.current?.scrollHeight, MIN_TEXTAREA_HEIGHT)}px`;
  }, [value]);

  const handleEnterKey = (e) => {
    if (e.key !== "Enter") return;
    if (e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    onSubmit && onSubmit(e);
  };

  return (
    <textarea
      ref={ref}
      rows={1}
      className={`flex-grow p-2.5 outline-none resize-none leading-tight scrollbar-none rounded-3xl ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={handleEnterKey}
      style={{ maxHeight: maxHeight }}
    />
  );
};
export default MyInput;
