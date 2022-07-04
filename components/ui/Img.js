const getImageSize = (size) => {
  switch (size) {
    case 1:
      return "w-8 h-8 sm:w-10 sm:h-10";
    case 2:
      return "w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem]";
    case 3:
      return "w-24 h-24 sm:w-40 sm:h-40";
    case 4:
      return "w-60 h-60 sm:w-80 sm:h-80";
    case 5:
      return "w-[25rem] h-[25rem] sm:w-[30rem] sm:h-[30rem]";
  }
};

const Img = ({
  src,
  alt = "",
  size = 3,
  rounded = false,
  soft = false,
  contain = false,
  border = false,
  colorful = false,
  className = "",
}) => {
  const imageSize = getImageSize(size);
  const colorfulBorder = "";
  // "p-[.2rem] bg-gradient-to-bl from-purple-500 via-red-500 to-yellow-300";
  // "p-0.5 border-2 border-l-amber-300 border-r-purple-500 border-y-red-500"

  return (
    <div
      className={` ${rounded && "rounded-full "} overflow-hidden w-fit h-fit 
      ${border && "p-0.5 bg-gray-200"} ${
        colorful &&
        "p-0.5 bg-gradient-to-bl from-purple-500 via-red-500 to-yellow-300"
      }`}
    >
      <img
        src={src}
        alt={alt}
        className={`${imageSize} bg-gray-300 border-2 ${
          (border || colorful) && "border-white bg-gray-200"
        } ${rounded && "rounded-full"} ${
          contain ? "contain" : "object-cover"
        } ${className}`}
      />
    </div>
  );
};
export default Img;
