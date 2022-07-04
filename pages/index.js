import Head from "next/head";
import Header from "../components/header/Header";
import Posts from "../components/post/Posts";
import Stories from "../components/Stories";

export default function Home() {
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
            className="relative w-full flex flex-col items-center flex-grow sm:pt-6
            sm:w-5/6 md:w-4/5 lg:w-11/12 max-w-7xl"
        >
          <Stories/>
          <Posts/>
        </main>
      </div>
  );
}
