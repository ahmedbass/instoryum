import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { HiHome, HiOutlineHome } from "react-icons/hi";
import { RiMessengerFill, RiMessengerLine } from "react-icons/ri";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentUserAtom } from "../../atom/CurrentUserAtom";
import { HeaderTabsAtom } from "../../atom/HeaderTabsAtom";
import { LOGIN_PAGE } from "../PagesProtector";
import MyButton from "../ui/MyButton";
import MyIcon from "../ui/MyIcon";
import NotificationIndicator from "../ui/NotificationIndicator";
import NewPostButton from "./NewPostButton";
import NotificationButton from "./NotificationButton";
import ProfileButton from "./ProfileButton";

const HeaderIcons = () => {
  // const { data: session } = useSession();
  const currentUser = useRecoilValue(currentUserAtom);

  const { pathname } = useRouter();
  const [currentActive, setCurrentActive] = useRecoilState(HeaderTabsAtom);

  const getCurrentPage = useCallback(
    () => ["/", "/chat", "/profile"].indexOf(pathname) + 1,
    [pathname]
  );
  useEffect(() => setCurrentActive(getCurrentPage()), [getCurrentPage, setCurrentActive]);
  const onBlur = () => setCurrentActive(getCurrentPage());

  return (
    <div className="flex items-center space-x-1 xs:space-x-3 sm:space-x-4 lg:space-x-6 justify-self-end col-start-3">
      <Link href="/">
        <a>
          <MyIcon Icon={currentActive === 1 ? HiHome : HiOutlineHome} hover={false} />
        </a>
      </Link>

      {currentUser && (
        <>
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
        </>
      )}

      {!currentUser && (
        <Link href={LOGIN_PAGE}>
          <a>
            <MyButton outline>Login</MyButton>
          </a>
        </Link>
      )}
    </div>
  );
};
export default HeaderIcons;
