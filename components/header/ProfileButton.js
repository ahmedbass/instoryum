import Link from "next/link";
import { useState } from "react";
import { BsGearWide } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import OverlayCard from "../ui/OverlayCard";
import OverlayOpener from "../ui/OverlayOpener";

const ProfileList = () => {
  const links = [
    { url: "/profile", name: "Profile", icon: <CgProfile size={20} /> },
    { url: "/settings", name: "Settings", icon: <BsGearWide size={20} /> },
    { url: "/logout", name: "Log Out", icon: <FiLogOut size={20} /> },
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
              <a className="px-4 py-3 hover:bg-gray-100 flex items-center space-x-3">
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

const ProfileButton = ({ isActive, onClick, onBlur }) => {
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
      className={`relative flex items-center cursor-pointer rounded-full h-8 w-8 md:h-10 md:w-10 bg-gray-300 ${
        (isActive || focused) && "border border-gray-500 border-2"
      }`}
      onClick={toggleShowList}
      onBlur={hide}
    >
      <ProfileList />
    </OverlayOpener>
  );
};
export default ProfileButton;
