const getIconSize = (size) => {
  switch (size) {
    case 1:
      return "w-3 h-3 md:w-4 md:h-4";
    case 2:
      return "w-5 h-5 md:w-6 md:h-6";
    case 3:
      return "w-7 h-7 md:w-8 md:h-8";
    case 4:
      return "w-10 h-10 md:w-12 md:h-12";
    case 5:
      return "w-12 h-12 md:w-16 md:h-16";
  }
};

const PostIcon = ({ Icon, size = 3, onClick, className }) => {
  const iconSize = getIconSize(size);
  return (
    <Icon
      className={`${iconSize} cursor-pointer text-gray-700 hover:text-gray-400 ${className}`}
      onClick={onClick}
    />
  );
};
export default PostIcon;
