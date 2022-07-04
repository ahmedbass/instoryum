import Img from "./ui/Img";

const Story = ({ username, image }) => {
  return (
    <li className="cursor-pointer flex flex-col justify-center items-center min-w-fit">
      <Img src={image} alt={username} size={2} rounded colorful />
      <p className="text-xs sm:text-sm text-gray-700 truncate w-16 sm:w-20 text-center m-1 mb-0">{username}</p>
    </li>
  );
};
export default Story;
