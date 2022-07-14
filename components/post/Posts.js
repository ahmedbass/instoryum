import { dummyPosts } from "../../data/posts";
import Post from "./Post";

const Posts = (props) => {
  return (
    <div className="col-center-h lg:items-start space-y-4 lg:space-y-8">
      {dummyPosts.map((post) => (
        <Post
          key={post.id}
          pictures={post.pictures}
          user={post.user}
          caption={post.caption}
          hashtags={post.hashtags}
          createdAt={post.createdAt}
          comments={post.comments}
          likes={post.likes}
          shares={post.shares}
        />
      ))}
    </div>
  );
};
export default Posts;
