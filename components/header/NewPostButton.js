import {RiAddCircleFill, RiAddCircleLine} from "react-icons/ri";
import MyIcon from "../ui/MyIcon";

const NewPostButton = ({isActive, onClick, onBlur}) => {
  return (
      <div tabIndex={0} onBlur={onBlur}>
        <MyIcon
            Icon={ isActive ? RiAddCircleFill : RiAddCircleLine}
            hover={false}
            onClick={onClick}
        />
      </div>
  );
};
export default NewPostButton;
