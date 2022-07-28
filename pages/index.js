import Posts from "../components/post/Posts";
import Stories from "../components/story/Stories";
import Suggestions from "../components/Suggestions";
import { getSession, useSession } from "next-auth/react";
import About from "../components/About";
import MyButton from "../components/ui/MyButton";
import toast from "react-hot-toast";
import { MdDone } from "react-icons/md";
import MyIcon from "../components/ui/MyIcon";

export default function Home() {
  // const { data: session } = useSession();
  return (
    <>
      <Stories />

      <div className="w-full grid grid-cols-1 lg:grid-cols-[minmax(60%,max-content)_minmax(18rem,33%)] md:mt-4 lg:gap-x-10">
        <Posts />

        <div className="hidden lg:flex flex-col h-fit space-y-4 sticky top-20 col-start-2">
          <Suggestions session={{}} />
          <About />
          <MyButton
            filled
            responsive
            onClick={() =>
              toast.success("Comment Shared Successfully", {
                position: "bottom-center",
                icon: <MyIcon Icon={MdDone} className="text-blue-500" />,
              })
            }
          >
            Click Me
          </MyButton>
        </div>

        <p className="text-gray-400 p-4 col-span-2 text-center">That is everything for now</p>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  // console.log({ session });
  // if (!session) {
  //   return {
  //     redirect: {destination: "/login", permanent: false},
  //   };
  // }

  return {
    props: { session },
  };
}
