import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import MyIcon from "../ui/MyIcon";
import Notifications from "./Notifications";
import OverlayOpener from "../ui/OverlayOpener";

const NotificationButton = ({ isActive, onClick, onBlur }) => {
  return (
    <OverlayOpener
      className="relative"
      onClick={onClick}
      onBlur={onBlur}
      opener={
        <div>
          <MyIcon
            Icon={isActive ? AiFillHeart : AiOutlineHeart}
            size={3}
            hover={false}
            clickable
          />
        </div>
      }
    >
      <Notifications />
    </OverlayOpener>
  );
};
export default NotificationButton;
