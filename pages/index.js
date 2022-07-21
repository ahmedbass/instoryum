import Posts from "../components/post/Posts";
import Stories from "../components/Story/Stories";
import Suggestions from "../components/Suggestions";
import { getSession, useSession } from "next-auth/react";
import About from "../components/About";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <Stories />

      <div className="w-full grid grid-cols-1 lg:grid-cols-[minmax(0,max-content)_minmax(34%,1fr)] md:mt-4 lg:gap-x-8">
        <Posts />

        <div className="hidden lg:flex flex-col h-fit space-y-4 sticky top-20">
          <Suggestions session={session} />
          <About />
        </div>

        <p className="text-gray-400 p-4 col-span-2 text-center">That is everything for now</p>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  console.log({ session });
  // if (!session) {
  //   return {
  //     redirect: {destination: "/login", permanent: false},
  //   };
  // }

  return {
    props: { session },
  };
}
