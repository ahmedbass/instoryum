import { getReadableDate } from "../../lib/utils";
import MyImg from "../ui/MyImg";

export const Hashtags = ({ hashtags, expandHashtagByDefault }) => {
  if (!hashtags?.length) return;
  return (
    <ul className={`space-x-2 mt-3 ${!expandHashtagByDefault && "hidden group-focus:block"}`}>
      {hashtags.map((h, i) => (
        <li key={h + i} className="inline-block text-blue-700 font-semibold cursor-pointer">
          {h}
        </li>
      ))}
    </ul>
  );
};

const PostCaption = ({
  username,
  caption,
  hashtags,
  createdAt,
  className,
  showUsername,
  showUserPicture,
  expandHashtagByDefault,
}) => {
  if (!caption) return;
  return (
    <div className={`group flex space-x-4 ${className}`} tabIndex={0}>
      {showUserPicture && <MyImg rounded size={1} className="mt-1" />}
      <div>
        <p className="line-clamp-2 group-focus:line-clamp-none">
          {showUsername && <span className={`font-semibold mr-2`}>{username}</span>}
          <span>{caption}</span>
          {!expandHashtagByDefault && hashtags?.length > 0 && (
            <span className="group-focus:hidden">...</span>
          )}
        </p>

        <Hashtags hashtags={hashtags} expandHashtagByDefault={expandHashtagByDefault} />

        <p className="text-gray-500 text-xs block mt-1">{getReadableDate(createdAt)}</p>
      </div>
    </div>
  );
};
export default PostCaption;
