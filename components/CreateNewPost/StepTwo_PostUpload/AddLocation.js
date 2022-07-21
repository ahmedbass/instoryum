import MyIcon from "../../ui/MyIcon";
import {RiMapPin2Line} from "react-icons/ri";
import {postLocation} from "../../../atom/CreateNewPostAtom";
import {useRecoilState} from "recoil";

const AddLocation = () => {
  const [location, setLocation] = useRecoilState(postLocation);
  return (
      <div className="w-full border-b border-gray-300 row-center-v px-4">
        <input
            type="text"
            placeholder="Add location"
            className="text-lg py-3 flex-grow outline-none placeholder-gray-400 focus:placeholder-gray-300"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
        />
        <MyIcon Icon={RiMapPin2Line} size={2}/>
      </div>
  );
};

export default AddLocation;
