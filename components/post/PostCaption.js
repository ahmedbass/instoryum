import { getReadableDate } from "../../utils";

const PostCaption = ({
  username,
  caption,
  hashtags,
  createdAt,
  className,
  br = "lg",
}) => {
  const hashtagsStyled = (hash = hashtags) =>
    hash.map((h, i) => (
      <span key={i + h} className="inline-block">{`#${h}`}</span>
    ));

  return (
    <div className={`group px-3 pb-3 ${className}`} tabIndex={0}>
      <p className="line-clamp-2 group-focus:line-clamp-none">
        <span className={`font-semibold mr-2 ${br}:hidden`}>{username}</span>

        <span>
          {caption}
          {hashtags.length > 0 && (
            <span className="group-focus:hidden">...</span>
          )}
        </span>
      </p>

      {hashtags.length > 0 && (
        <div className="text-blue-900 hidden group-focus:block space-x-1 mt-4">
          {hashtagsStyled(hashtags)}
        </div>
      )}

      <p className="text-gray-500 text-xs sm:text-sm block mt-2">
        {getReadableDate(createdAt)}
      </p>
    </div>
  );
};
export default PostCaption;
