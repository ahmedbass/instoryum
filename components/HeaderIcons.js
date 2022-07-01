import { HiHome, HiOutlineSearch } from "react-icons/hi";
import { RiAddCircleLine, RiHeart3Line, RiMessengerLine } from "react-icons/ri";

const HeaderIcons = (props) => {
  const iconStyle = "h-7 sm:h-8 md:h-9 w-auto cursor-pointer";

  return (
    <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6 justify-self-end col-start-3">
      <HiOutlineSearch
        className={`${iconStyle} sm:hidden`}
        onClick={props.searchIconCallback}
      />
      <HiHome className={iconStyle} />
      <RiMessengerLine className={iconStyle} />
      <RiHeart3Line className={iconStyle} />
      <RiAddCircleLine className={iconStyle} />

      <div className="rounded-full h-8 w-8 md:h-10 md:w-10 bg-gray-300"></div>
    </div>
  );
};
export default HeaderIcons;
