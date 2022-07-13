import Posts from "../components/post/Posts";
import Stories from "../components/Story/Stories";

export default function Home() {
  return (
      <>
        <Stories/>
        <div className="w-full grid grid-cols-1 lg:grid-cols-[2fr,1fr]">
          <Posts/>
          <p className="text-gray-400 p-4 col-span-2 text-center">That is everything for now</p>
        </div>
      </>
  );
}
