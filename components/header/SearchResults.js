import SearchResultItem from "./SearchResultItem";

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
    { image: "", username: "ABC", fullName: "Abc Dfg", isFollowing: true },
    { image: "", username: "ABC", fullName: "Abc Dfg", isFollowing: true },
    { image: "", username: "ABC", fullName: "Abc Dfg", isFollowing: true },
    { image: "", username: "ABC", fullName: "Abc Dfg", isFollowing: true },
    { image: "", username: "ABC", fullName: "Abc Dfg", isFollowing: true },
    { image: "", username: "ABC", fullName: "Abc Dfg", isFollowing: true },
  ];

  return (
    <div
      className="bg-white rounded-lg shadow-lg z-10 w-screen md:w-[28rem] h-96
            absolute top-20 md:top-16 left-1/2 transform -translate-x-1/2
            scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
      tabIndex={0}
    >
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
    </div>
  );
};
export default SearchResults;
