import { HiHome, HiOutlineHome } from "react-icons/hi";
import { RiMessengerFill, RiMessengerLine } from "react-icons/ri";
import Link from "next/link";
import ProfileButton from "./ProfileButton";
import MyIcon from "../ui/MyIcon";
import NotificationButton from "./NotificationButton";
import NewPostButton from "./NewPostButton";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import NotificationIndicator from "../ui/NotificationIndicator";

const HeaderIcons = () => {
  // const { data: session } = useSession();

  const routerName = useRouter().pathname;
  const [currentActive, setCurrentActive] = useState(1);

  const getCurrentPage = useCallback(
    () => ["/", "/chat", "/profile"].indexOf(routerName) + 1,
    [routerName]
  );
  useEffect(() => setCurrentActive(getCurrentPage()), [getCurrentPage]);
  const onBlur = () => setCurrentActive(getCurrentPage());

  return (
    <div className="flex items-center space-x-1 xs:space-x-2 sm:space-x-4 lg:space-x-6 justify-self-end col-start-3">
      <Link href="/">
        <a>
          <MyIcon Icon={currentActive === 1 ? HiHome : HiOutlineHome} hover={false} />
        </a>
      </Link>

      <Link href="/chat">
        <a className="relative">
          <MyIcon
            Icon={currentActive === 2 ? RiMessengerFill : RiMessengerLine}
            hover={false}
            clickable
          />
          <NotificationIndicator number={1} />
        </a>
      </Link>

      <NotificationButton
        isActive={currentActive === 4}
        onClick={() => setCurrentActive(4)}
        onBlur={onBlur}
      />

      <NewPostButton
        isActive={currentActive === 5}
        onClick={() => setCurrentActive(5)}
        onBlur={onBlur}
      />

      <ProfileButton
        // image={session?.user.image}
        isActive={currentActive === 3}
        onClick={() => setCurrentActive(3)}
        onBlur={onBlur}
      />
    </div>
  );
};
export default HeaderIcons;
