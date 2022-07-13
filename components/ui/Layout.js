import Head from "next/head";
import Header from "../header/Header";

export const MY_SCROLL =
  "overflow-x-hidden overflow-y-auto sm:scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200";

const Layout = ({ children }) => {
  const BACKGROUND_COLOR = "bg-gray-100";

  return (
    <div className={`${BACKGROUND_COLOR} h-screen w-screen col-center-h ${MY_SCROLL}`}>
      <Head>
        <title>My Instagram</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="My Instagram clone" />
        <link rel="icon" href="/logo.svg.webp" />
      </Head>

      <Header />

      <main className="relative flex-grow col-center-h md:pt-6 w-full md:w-[90%] max-w-6xl">
        {children}
      </main>
    </div>
  );
};
export default Layout;
