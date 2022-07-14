import MyButton from "../../ui/MyButton";
import MyIcon from "../../ui/MyIcon";
import { BsGearWide } from "react-icons/bs";
import { FaUserCheck } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";

const MyselfActions = () => (
  <>
    <MyButton outline neutral>
      Edit profile
    </MyButton>
    <MyIcon Icon={BsGearWide} size={3} className="px-3" />
  </>
);

const AmFollowingActions = () => (
  <div className="flex space-x-2">
    <MyButton outline responsive>
      Message
    </MyButton>
    <MyButton outline>
      <MyIcon
        Icon={FaUserCheck}
        size={2}
        hover={false}
        className="px-4"
        onClick={() => console.log("unfriend?")}
      />
    </MyButton>
  </div>
);

const FollowsMeActions = () => <MyButton>Follow back</MyButton>;

const StrangerActions = () => <MyButton>Follow</MyButton>;

const MoreActions = () => <MyIcon Icon={FiMoreHorizontal} onClick={() => console.log("more...")} />;

const ProfileActions = ({ isMyself, amFollowing, isFollowingMe }) => {
  let actions;
  if (isMyself) {
    actions = MyselfActions();
  } else if (amFollowing) {
    actions = AmFollowingActions();
  } else if (isFollowingMe) {
    actions = FollowsMeActions();
  } else {
    actions = StrangerActions();
  }

  return (
    <div className="flex space-x-2 items-center">
      {actions}
      {!isMyself && MoreActions()}
    </div>
  );
};

export default ProfileActions;
