import PostHeader from "./PostHeader";
import CommentInput from "./CommentInput";
import PostPicture from "./PostPicture";
import Comments from "./Comments";
import PostDetails from "./PostDetails";
import PostActions from "./PostActions";
import PostStats from "./PostStats";
import {useState} from "react";

const Post = ({user, pictures, createdAt, caption, hashtags, likes, shares, saves, comments}) => {
  const [showComments, setShowComments] = useState(false);
  return (
      <div
          className={`bg-white w-full md:max-w-2xl sm:border sm:rounded-lg overflow-hidden flex flex-col`}
      >
        <PostHeader user={user}/>
        <PostPicture pictures={pictures} caption={caption}/>

        <div className={`p-3 space-y-4 border-t`}>
          <PostActions setShowComments={setShowComments.bind(this, !showComments)}/>
          <PostStats likes={likes} comments={comments} shares={shares} setShowComments={setShowComments.bind(this, !showComments)}/>
        </div>

        <PostDetails
            username={user.username}
            caption={caption}
            hashtags={hashtags}
            createdAt={createdAt}
        />

        <Comments comments={comments} showComments={showComments}/>
        <CommentInput className="order-4"/>
      </div>
  );
};
export default Post;
