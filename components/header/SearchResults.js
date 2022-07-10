import SearchResultItem from "./SearchResultItem";
import OverlayCard from "../ui/OverlayCard";

const SearchResults = (props) => {
  const searchResults = [
    {
      image: "",
      username: "It's AAAAzzyyyyy",
      fullName: "Aazzy Pizza",
      isFollowing: true,
    },
    {
      image: "",
      username: "Ahmed__3D",
      fullName: "Ahmed Bass",
      isFollowing: false,
      isVerified: true,
    },
    { image: "", username: "ABC1", fullName: "Abc Dfg", isFollowing: true },
    { image: "", username: "ABC2", fullName: "Abc Dfg", isFollowing: true },
    { image: "", username: "ABC3", fullName: "Abc Dfg", isFollowing: true },
    { image: "", username: "ABC4", fullName: "Abc Dfg", isFollowing: true },
    { image: "", username: "ABC5", fullName: "Abc Dfg", isFollowing: true },
    { image: "", username: "ABC6", fullName: "Abc Dfg", isFollowing: true },
  ];

  return (
    <OverlayCard center className="w-screen md:w-[28rem] h-96">
      <div className="p-4 pb-2 flex justify-between">
        <h2 className="font-semibold text-xl">Recent</h2>
        <button className="font-semibold text-blue-400 text-lg">
          Clear all
        </button>
      </div>

      <ul>
        {searchResults.map((item) => (
          <SearchResultItem key={item.username} item={item} />
        ))}
      </ul>
    </OverlayCard>
  );
};
export default SearchResults;
