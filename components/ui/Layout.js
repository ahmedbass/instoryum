import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../header/Header";
import { LOGIN_PAGE } from "../PagesProtector";

export const MY_SCROLL =
  "overflow-x-hidden overflow-y-auto sm:scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200";
export const BACKGROUND_COLOR = "bg-gray-100";

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  const isAddHeader = ![LOGIN_PAGE].includes(pathname);

  return (
    <div className={`${BACKGROUND_COLOR} h-screen w-screen col-center-h ${MY_SCROLL}`}>
      <Head>
        <title>My Instagram</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
        <meta name="description" content="My Instagram clone" />
        <link rel="icon" href="/logo.svg.webp" />
      </Head>

      {isAddHeader && <Header />}

      <main className="relative col-center-h md:pt-6 flex-grow w-full md:w-[90%] max-w-5xl">
        {children}
      </main>
    </div>
  );
};
export default Layout;
