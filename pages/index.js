import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
      <div className="flex flex-col h-screen justify-center">
        <Head>
          <title>My Instagram</title>
          <meta name="description" content="My Instagram clone"/>
          <link rel="icon" href="/logo.svg.webp"/>
        </Head>

        <Header/>

        <main className="bg-gray-100 flex-grow"></main>
      </div>
  );
}
