import { useSession } from "next-auth/react";

export const LOGIN_PAGE = "/login";

const ProtectedPages = ({ children, router }) => {
  const { data: session } = useSession();
  const unprotectedRoutes = [LOGIN_PAGE];
  const isBrowser = () => typeof window !== "undefined";

  const { pathname } = router;
  const isProtectedPath = !unprotectedRoutes.includes(pathname);

  if (isBrowser() && !session && isProtectedPath) {
    router.push(LOGIN_PAGE);
  }

  return <>{children}</>;
};
export default ProtectedPages;
