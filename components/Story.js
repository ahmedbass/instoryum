const Story = ({ username, image }) => {
  return (
    <li className="cursor-pointer flex flex-col justify-center items-center min-w-fit">
      <img
        src={image}
        alt={username}
        className="h-16 sm:h-[4.3rem] rounded-full p-[.2rem] bg-gradient-to-bl from-purple-500 via-red-500 to-yellow-300"
        // className="h-16 w-16 rounded-full p-0.5 border-2 border-l-amber-300 border-r-purple-500 border-y-red-500"
      />
      <p className="text-xs sm:text-sm text-gray-700 truncate w-16 sm:w-20 text-center m-1 mb-0">{username}</p>
    </li>
  );
};
export default Story;
