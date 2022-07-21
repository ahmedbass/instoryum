import MyIcon from "./MyIcon";

const FloatingIcon = ({ icon, onClick, className, size = 2, isActive, disabled, ...res }) => (
  <button
    className={`group rounded-full p-2 bg-opacity-50 hover:bg-opacity-70 disabled:invisible pointer-events-auto
      ${isActive ? "bg-white shadow-md" : "bg-black"} 
      ${className}`}
    onClick={onClick}
    disabled={disabled}
    {...res}
  >
    <MyIcon
      Icon={icon}
      size={size}
      hover={false}
      className={`"drop-shadow  ${isActive ? "text-black" : "text-gray-200"}`}
    />
  </button>
);
export default FloatingIcon;
