import Head from "next/head";
import Header from "../components/header/Header";
import Feed from "../components/Feed";
import Stories from "../components/Stories";

export default function Home() {
  return (
      <div
          className="h-screen w-screen flex flex-col bg-gray-100 overflow-x-hidden
      sm:scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
      >
        <Head>
          <title>My Instagram</title>
          <meta name="description" content="My Instagram clone"/>
          <link rel="icon" href="/logo.svg.webp"/>
        </Head>

        <Header/>

        {/*bg-rose-200*/}
        <main className="relative flex-grow flex flex-col items-center sm:py-6 w-full ">
          <Stories/>
          <Feed/>
        </main>
      </div>
  );
}
