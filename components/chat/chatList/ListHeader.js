import {FiEdit} from "react-icons/fi";
import {useRecoilValue} from "recoil";
import {currentUserAtom} from "../../../atom/CurrentUserAtom";
import MyIcon from "../../ui/MyIcon";

const ListHeader = () => {
  const currentUser = useRecoilValue(currentUserAtom);

  return (
      <div className="row-center-v px-4 py-2 md:min-h-[4rem] max-h-[4rem] border-b border-gray-300">
        <h3 className="flex-grow text-center font-semibold sm:text-lg">{currentUser?.username}</h3>
        <MyIcon Icon={FiEdit}
                onClick={() => console.log("open same modal of sending new message")}/>
      </div>
  );
};

export default ListHeader;
