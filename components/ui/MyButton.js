import MyLoader from "./MyLoader";

const MyButton = ({
  children,
  onClick,
  outline,
  filled,
  neutral,
  bold,
  small,
  responsive,
  disabled,
  className,
  loading,
  ...props
}) => {
  const basics = "rounded row-center";

  let containerStyle = "";
  let textStyle = neutral
    ? (bold ? " font-semibold text-gray-700" : "text-gray-500") +
      " active:text-gray-400 disabled:text-gray-300"
    : "font-semibold text-blue-500 active:text-blue-400 disabled:text-blue-300";
  let size = small ? "text-sm" : "text-base";

  if (filled) {
    size = small ? "text-sm px-1.5 py-0.5" : "text-base px-3 py-1.5";
    textStyle = "font-semibold text-white select-none";
    containerStyle = neutral
      ? "bg-gray-500 active:bg-gray-400 disabled:bg-gray-300"
      : "bg-blue-500 active:bg-blue-400 disabled:bg-blue-300";
  } else if (outline) {
    size = small ? "text-sm px-1.5 py-0.5" : "text-base px-3 py-1";
    textStyle = neutral
      ? "font-semibold text-gray-700 active:text-gray-400 disabled:text-gray-300"
      : "font-semibold text-blue-500 active:text-blue-400 disabled:text-blue-300";
    containerStyle = neutral
      ? "border border-gray-300 active:border-gray-300 disabled:border-gray-300"
      : "border border-blue-500 active:border-blue-400 disabled:border-blue-300";
  }

  const resp = responsive ? "min-w-fit w-full" : "w-fit";

  return (
    <button
      className={`${containerStyle} ${textStyle} ${size} ${resp} ${basics} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {loading && <MyLoader show={loading} size={0.5} />}
      {children}
    </button>
  );
};
export default MyButton;
