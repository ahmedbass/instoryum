import PostHeader from "./PostHeader";
import CommentInput from "./CommentInput";
import PostPicture from "./PostPicture";
import Comments from "./Comments";
import PostDetails from "./PostDetails";
import PostActions from "./PostActions";
import { MY_SCROLL } from "../ui/Layout";
import PostStats from "./PostStats";

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
  return (
    <div
      className={`${br}:grid grid-cols-5 grid-rows-[auto_minmax(0,_1fr)] w-full md:max-w-2xl
        sm:border sm:rounded-xl overflow-hidden bg-white`}
    >
      <PostHeader user={user} className={`${br}:col-span-2 ${br}:col-start-4 row-start-1`} />

      <div className={`${br}:col-span-3 ${br}:col-start-1 row-span-2 overflow-hidden flex-grow`}>
        <PostPicture pictures={pictures} caption={caption} />
      </div>

      <div className={`${br}:col-span-2 ${br}:col-start-4 h-full relative flex flex-col`}>
        <div className={`flex flex-col max-h-full ${br}:flex-grow order-2 ${MY_SCROLL}`}>
          <PostDetails
            username={user.username}
            caption={caption}
            hashtags={hashtags}
            createdAt={createdAt}
            br={br}
            className={`${br}:order-1`}
          />

          <Comments comments={comments} br={br} />
        </div>

        <div className={`p-3 space-y-4 border-t order-1 ${br}:order-3`}>
          <PostActions />
          <PostStats likes={likes} comments={comments} shares={shares} br={br} />
        </div>

        <CommentInput className="order-4" />
      </div>
    </div>
  );
};
export default Post;
