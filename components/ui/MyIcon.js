const getIconSize = (size) => {
  switch (size) {
    case 0.5:
      return "w-3 h-3"
    case 1:
      return "w-4 h-4";
    case 2:
      return "w-5 h-5 md:w-5 md:h-5";
    case 3:
      return "w-7 h-7 md:w-7 md:h-7";
    case 4:
      return "w-10 h-10 md:w-12 md:h-12";
    case 5:
      return "w-12 h-12 md:w-16 md:h-16";
    case 6:
      return "w-18 h-18 xs:w-20 xs:h-20 md:w-22 md:h-22";
  }
};

const MyIcon = ({
  Icon,
  size = 3,
  onClick,
  clickable = false,
  hover = true,
  className,
  ...rest
}) => {
  const iconSize = className?.includes("w-") ? "" : getIconSize(size);
  return (
    <Icon
      className={`${iconSize} min-w-fit text-gray-700 ${
        (onClick || clickable) && "cursor-pointer active:text-gray-400"
      } ${hover && "hover:text-gray-400"} ${className}`}
      onClick={onClick}
      {...rest}
    />
  );
};
export default MyIcon;
