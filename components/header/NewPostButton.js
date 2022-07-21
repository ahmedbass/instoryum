import { RiAddCircleFill, RiAddCircleLine } from "react-icons/ri";
import MyIcon from "../ui/MyIcon";
import { useRecoilState } from "recoil";
import { modalState } from "../../atom/CreatePostModalAtom";
import CreateNewPost from "../CreateNewPost/CreateNewPost";

const NewPostButton = ({ isActive, onClick, onBlur }) => {
  const [openModal, setOpenModal] = useRecoilState(modalState);

  const handleClick = (e) => {
    setOpenModal(true);
    onClick();
  };

  return (
    <div tabIndex={0} onBlur={onBlur}>
      <MyIcon
        Icon={isActive ? RiAddCircleFill : RiAddCircleLine}
        hover={false}
        onClick={handleClick}
      />

      <CreateNewPost />
    </div>
  );
};
export default NewPostButton;
