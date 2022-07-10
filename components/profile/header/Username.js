import MyIcon from "../../ui/MyIcon";
import {GoVerified} from "react-icons/go";

const Username = ({username, isVerified}) => (
    <div className="flex items-center space-x-2">
      <h2 className="text-2xl sm:text-3xl font-light truncate py-1">
        {username.toLowerCase()}
      </h2>

      {isVerified && (
          <MyIcon
              Icon={GoVerified}
              size={2}
              className="text-blue-500"
              hover={false}
          />
      )}
    </div>
);
export default Username;
