import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { currentUserAtom } from "../atom/CurrentUserAtom";
import { auth, db } from "../lib/firebase";
import MyLoaderFull from "./ui/MyLoaderFull";

export const LOGIN_PAGE = "/login";
export const HOME_PAGE = "/";

const PagesProtector = ({ children }) => {
  // const { data: session } = useSession();
  const [currentUser, setCurrentUser] = useRecoilState(currentUserAtom);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { pathname, events } = router;
  const unprotectedRoutes = [HOME_PAGE, LOGIN_PAGE];
  const protectedRoute = !unprotectedRoutes.includes(pathname);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      console.log("just called on auth changed", { currentUser });
      const protectRoutes = async () => {
        if (pathname === LOGIN_PAGE && user) await router.push(HOME_PAGE);
        else if (protectedRoute && !user) await router.push(LOGIN_PAGE);
      };

      try {
        if (user) {
          onSnapshot(doc(db, `users/${user.uid}`), (snapshot) => {
            setCurrentUser({ ...snapshot.data(), ...user.reloadUserInfo, id: user.uid }),
              (e) => console.log("error on user change listener", e);
            protectRoutes().then(() => setLoading(false));
          });
        } else {
          setCurrentUser(null);
          protectRoutes().then(() => setLoading(false));
        }
      } catch (e) {
        protectRoutes().then(() => setLoading(false));
        console.log(e, "UH-OOH!");
      }
    });
  }, [pathname]);

  useEffect(() => {
    const handleStart = (url) => NProgress.start();
    const handleComplete = (url) => NProgress.done();

    events.on("routeChangeStart", handleStart);
    events.on("routeChangeComplete", handleComplete);
    events.on("routeChangeError", handleComplete);

    return () => {
      events.off("routeChangeStart", handleStart);
      events.off("routeChangeComplete", handleComplete);
      events.off("routeChangeError", handleComplete);
    };
  }, [events]);

  if (loading) return <MyLoaderFull />;
  return children;
};
export default PagesProtector;
