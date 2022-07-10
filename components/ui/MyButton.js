const MyButton = ({
  children,
  onClick,
  hollow,
  small,
  responsive,
  className,
}) => {
  const style = hollow
    ? "border border-gray-300 text-gray-700 active:text-gray-400"
    : "text-white bg-blue-500 active:bg-blue-300";
  const size = small ? "text-sm px-1 py-0.5" : "text-base px-3 py-1.5";
  const resp = responsive ? "flex-grow" : "";
  const basic = "rounded font-semibold flex justify-center items-center inline-block";

  return (
    <button
      className={`${style} ${size} ${resp} ${basic} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default MyButton;
