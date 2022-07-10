import Head from "next/head";
import Header from "../header/Header";

const Layout = ({children}) => {
  const BACKGROUND_COLOR = "bg-gray-100";

  return (
      <div
          className={`${BACKGROUND_COLOR} h-screen w-screen flex flex-col items-center overflow-x-hidden
            sm:scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200`}
      >
        <Head>
          <title>My Instagram</title>
          <meta name="description" content="My Instagram clone"/>
          <link rel="icon" href="/logo.svg.webp"/>
        </Head>

        <Header/>

        <main
            className="relative w-full flex-grow flex flex-col items-center md:pt-6
              w-screen md:w-[90%] lg:w-[80%] max-w-6xl"
        >
          {children}
        </main>
      </div>
  );
};
export default Layout;
