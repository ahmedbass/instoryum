import MyIcon from "../../ui/MyIcon";
import {FiEdit} from "react-icons/fi";

const ListHeader = ({username}) => (
    <div className="row-center-v px-4 py-2 md:min-h-[4rem] max-h-[4rem] border-b border-gray-300">
      <h3 className="flex-grow text-center font-semibold sm:text-lg">{username}</h3>
      <MyIcon Icon={FiEdit} onClick={() => console.log("open same modal of sending new message")}/>
    </div>
);

export default ListHeader;
