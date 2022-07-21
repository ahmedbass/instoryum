import Link from "next/link";
import { useState } from "react";
import { BsGearWide } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import OverlayCard from "../ui/OverlayCard";
import OverlayOpener from "../ui/OverlayOpener";
import { signOut } from "next-auth/react";
import MyImg from "../ui/MyImg";

const ProfileList = () => {
  const links = [
    { url: "/profile", name: "Profile", icon: <CgProfile size={20} /> },
    { url: "/settings", name: "Settings", icon: <BsGearWide size={20} /> },
    { url: "", name: "Log Out", icon: <FiLogOut size={20} />, onClick: signOut },
  ];

  return (
    <OverlayCard
      className="w-60 text-start text-gray-700 bg-white rounded-lg border shadow flex flex-col"
      right
    >
      <ul>
        {links.map((link) => (
          <li key={link.url}>
            <Link href={link.url}>
              <a
                className="px-4 py-3 hover:bg-gray-100 flex items-center space-x-3"
                onClick={link.onClick}
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </OverlayCard>
  );
};

const ProfileButton = ({ isActive, onClick, onBlur, image }) => {
  const [focused, setFocused] = useState(false);

  const toggleShowList = () => {
    focused ? onBlur() : onClick();
    setFocused(!focused);
  };

  const hide = (e) => {
    setFocused(false);
    onBlur();
  };

  return (
    <OverlayOpener
      className={`min-w-max`}
      onClick={toggleShowList}
      onBlur={hide}
      opener={<MyImg src={image} size={1} rounded className={`cursor-pointer rounded-full  min-w-fit ${
          (isActive || focused) && "border-gray-500 border border-2"
      }`} />}
    >
      <ProfileList />
    </OverlayOpener>
  );
};
export default ProfileButton;
