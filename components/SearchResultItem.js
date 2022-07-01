import Image from "next/image";
import { GoVerified } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";

const SearchResultItem = ({ item }) => {
  return (
    <li className="flex items-center px-4 py-2 space-x-3 hover:bg-gray-100 cursor-pointer">
      <div className="bg-gray-300 w-14 h-14 rounded-full">
        {item.image && (
          <Image src={item.image} alt={item.username} layout="fill" />
        )}
      </div>

      <div>
        <h3 className="font-semibold flex items-center space-x-1">
          <span>{item.username}</span>
          {item.isVerified && <GoVerified className="text-blue-400" />}
        </h3>

        <p className="text-gray-500">
          <span>{item.fullName}</span>
          {item.isFollowing && <span>&nbsp;&bull; Following</span>}
        </p>
      </div>

      <MdOutlineClose className="w-7 h-auto text-gray-500 absolute right-4" />
    </li>
  );
};
export default SearchResultItem;
