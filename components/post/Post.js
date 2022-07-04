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

  const BRP = "lg";

  const LikesSharesComments = (
      <div className="p-3 space-y-4">
        <PostIcons
            picturesCount={pictures.length}
            picCountIndicators={picCountIndicators}
        />

        <div className={`space-y-2 ${BRP}:flex justify-between items-center`}>
          <p className="font-semibold">
            {likes.length ? `${likes.length} Likes` : "Be the first to like this"}
          </p>

          <div className="flex justify-between space-x-2">
            {comments.length > 0 && (
                <p className="text-gray-500">
                  <span className={`lg:hidden`}>View all</span>{" "}
                  {comments.length} comments
                </p>
            )}

            {shares.length > 0 && (
                <p className="text-gray-500">{shares.length} shares</p>
            )}
          </div>
        </div>
      </div>
  );

  const size = "w-full h-auto lg:max-h-[75vh] lg:min-h-[65vh]";

  return (
      <div
          className={`${size} lg:grid grid-cols-5 grid-rows-[auto_minmax(0,_1fr)] sm:border rounded-xl overflow-hidden bg-white`}
      >
        <PostHeader
            user={user}
            className={`lg:col-span-2 lg:col-start-4 row-start-1`}
        />

        <div
            className={`lg:col-span-3 lg:col-start-1 row-span-2 overflow-hidden flex-grow`}
        >
          <PostPicture
              pictures={pictures}
              caption={caption}
              picCountIndicators={picCountIndicators}
          />
        </div>

        <div
            className={`lg:col-span-2 lg:col-start-4 h-full relative flex flex-col`}
        >
          <div
              className="flex flex-col max-h-full lg:flex-grow overflow-scroll
              scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-200 order-2"
          >
            <PostCaption
                username={user.username}
                caption={caption}
                hashtags={hashtags}
                createdAt={createdAt}
                br={"lg"}
                className={`lg:order-1`}
            />

            <div
                className={`lg:order-2 hidden lg:flex flex-col flex-grow p-2 sm:p-4 space-y-8`}
            >
              {comments.map((comment, i) => (
                  <Comment key={comment.id + i} {...comment} />
              ))}
            </div>
          </div>

          <div className={`border-t order-1 lg:order-3`}>
            {LikesSharesComments}
          </div>

          <CommentInput className="order-4"/>
        </div>
      </div>
  );
};
export default Post;
