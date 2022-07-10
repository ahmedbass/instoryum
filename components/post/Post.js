import PostHeader from "./PostHeader";
import CommentInput from "./CommentInput";
import PostPicture from "./PostPicture";
import {GoPrimitiveDot} from "react-icons/go";
import Comment from "./Comment";
import PostIcons from "./PostIcons";
import PostCaption from "./PostCaption";

const Post = ({
                user,
                pictures,
                createdAt,
                caption,
                hashtags,
                likes,
                shares,
                saves,
                comments,
                br = "2xl",
              }) => {
  const picCountIndicators = (length) => {
    const dots = [];
    for (let i = 0; i < length; i++) {
      dots.push(
          <GoPrimitiveDot
              key={i}
              size={12}
              className={`${i === 0 ? "text-blue-500" : "text-gray-400"}`}
          />
      );
    }
    return dots;
  };

  const size = `w-full h-auto ${br}:max-h-[75vh] ${br}:min-h-[65vh] max-w-2xl ${br}:max-w-full`;

  const LikesSharesComments = (
      <div className="p-3 space-y-4">
        <PostIcons
            picturesCount={pictures.length}
            picCountIndicators={picCountIndicators}
        />

        <div className={`space-y-2 ${br}:flex justify-between items-center`}>
          <p className="font-semibold">
            {likes.length ? `${likes.length} Likes` : "Be the first to like this"}
          </p>

          <div className="flex justify-between space-x-2">
            {comments.length > 0 && (
                <p className="text-gray-500">
                  <span className={`${br}:hidden`}>View all</span> {comments.length}{" "}
                  comments
                </p>
            )}

            {shares.length > 0 && (
                <p className="text-gray-500">{shares.length} shares</p>
            )}
          </div>
        </div>
      </div>
  );

  return (
      <div
          className={`${size} ${br}:grid grid-cols-5 grid-rows-[auto_minmax(0,_1fr)] sm:border rounded-xl overflow-hidden bg-white`}
      >
        <PostHeader
            user={user}
            className={`${br}:col-span-2 ${br}:col-start-4 row-start-1`}
        />

        <div
            className={`${br}:col-span-3 ${br}:col-start-1 row-span-2 overflow-hidden flex-grow`}
        >
          <PostPicture
              pictures={pictures}
              caption={caption}
              picCountIndicators={picCountIndicators}
          />
        </div>

        <div
            className={`${br}:col-span-2 ${br}:col-start-4 h-full relative flex flex-col`}
        >
          <div
              className="flex flex-col max-h-full ${br}:flex-grow overflow-scroll
              scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-200 order-2"
          >
            <PostCaption
                username={user.username}
                caption={caption}
                hashtags={hashtags}
                createdAt={createdAt}
                br={"${br}"}
                className={`${br}:order-1`}
            />

            <div
                className={`${br}:order-2 hidden ${br}:flex flex-col flex-grow p-2 sm:p-4 space-y-8`}
            >
              {comments.map((comment, i) => (
                  <Comment key={comment.id + i} {...comment} />
              ))}
            </div>
          </div>

          <div className={`border-t order-1 ${br}:order-3`}>
            {LikesSharesComments}
          </div>

          <CommentInput className="order-4"/>
        </div>
      </div>
  );
};
export default Post;
