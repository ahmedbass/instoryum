import Posts from "../components/post/Posts";
import Stories from "../components/Story/Stories";
import Suggestions from "../components/Suggestions";

export default function Home() {
  return (
      <>
        <Stories/>
        <div
            className="w-full grid grid-cols-1 lg:grid-cols-[minmax(0,max-content)_minmax(33%,1fr)] sm:mt-6 lg:gap-x-8 xl:gap-x-14">
          <Posts/>
          <Suggestions/>
          <p className="text-gray-400 p-4 col-span-2 text-center">That is everything for now</p>
        </div>
      </>
  );
}
