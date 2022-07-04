import {HiHome, HiOutlineSearch} from "react-icons/hi";
import {RiAddCircleLine, RiHeart3Line, RiMessengerLine} from "react-icons/ri";
import Link from "next/link";
import {AiOutlineHeart} from "react-icons/ai";

const HeaderIcons = (props) => {
  const iconStyle = "h-6 sm:h-7 md:h-8 w-auto cursor-pointer";

  return (
    <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6 justify-self-end col-start-3">
      <HiOutlineSearch
        className={`${iconStyle} sm:hidden`}
        onClick={props.searchIconCallback}
      />
      <HiHome className={iconStyle} />
      <RiMessengerLine className={iconStyle} />
      <AiOutlineHeart className={iconStyle} />
      <RiAddCircleLine className={iconStyle} />

      <Link href="/profile">
        <a className="rounded-full h-8 w-8 md:h-10 md:w-10 bg-gray-300"></a>
      </Link>
    </div>
  );
};
export default HeaderIcons;
