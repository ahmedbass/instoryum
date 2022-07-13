import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import MyIcon from "../ui/MyIcon";
import Notifications from "./Notifications";
import OverlayOpener from "../ui/OverlayOpener";
import NotificationIndicator from "../ui/NotificationIndicator";

const NotificationButton = ({ isActive, onClick, onBlur }) => {
  return (
    <OverlayOpener
      className="relative"
      onClick={onClick}
      onBlur={onBlur}
      opener={
        <div className="relative">
          <MyIcon
            Icon={isActive ? AiFillHeart : AiOutlineHeart}
            size={3}
            hover={false}
            clickable
          />
          <NotificationIndicator number={1}/>
        </div>
      }
    >
      <Notifications />
    </OverlayOpener>
  );
};
export default NotificationButton;
