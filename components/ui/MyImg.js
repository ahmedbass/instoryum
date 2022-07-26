const getImageSize = (size) => {
  switch (size) {
    case 0.5:
      return "w-6 h-6";
    case 1:
      return "w-8 h-8 sm:w-10 sm:h-10";
    case 2:
      return "w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14";
    case 3:
      return "w-14 h-14 xs:w-16 xs:h-16 sm:w-18 sm:h-18";
    case 4:
      return "w-20 h-20 md:w-44 md:h-44";
    case 5:
      return "w-60 h-60 sm:w-80 sm:h-80";
    case 6:
      return "w-[25rem] h-[25rem] sm:w-[30rem] sm:h-[30rem]";
  }
};

const Border = ({ children, rounded = true, border, colorful, size }) => {
  if (!border && !colorful) return children;
  const p = size <= 3 ? "p-0.5" : "p-1";
  return (
    <div
      className={` ${rounded && "rounded-full"} overflow-hidden w-fit h-fit
      ${border && `${p} bg-gray-200`}
      ${colorful && `${p} bg-gradient-to-bl from-purple-600 via-red-500 to-yellow-300`}`}
    >
      {children}
    </div>
  );
};

const MyImg = ({
  src,
  alt = "",
  size = 3,
  rounded = false,
  contain = false,
  border = false,
  colorful = false,
  className = "",
}) => {
  const imageSize = getImageSize(size);
  const imgBorder = "border-" + (size - (size % 2) >= 2 ? size - (size % 2) : 2);

  return (
    <div className="min-w-max">
      <Border rounded={rounded} border={border} colorful={colorful} size={size}>
        <img
          src={src}
          alt={alt}
          className={`${imageSize} bg-gray-300  ${
            (border || colorful) && `${imgBorder} border-white`
          } ${rounded && "rounded-full"} ${
            contain ? "object-contain" : "object-cover"
          } ${className}`}
        />
      </Border>
    </div>
  );
};
export default MyImg;
