import { dummyPosts } from "../../data/posts";
import Post from "./Post";

const Posts = (props) => {
  const posts = dummyPosts;
  console.log({ posts });
  return (
    <div
      className="flex flex-col items-center w-full
       sm:mt-6 space-y-4 lg:space-y-8 grid-cols-1 sm:grid-cols-2"
    >
      {posts.map((post) => (
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

      <p className="text-gray-400 p-4">That is everything for now</p>
    </div>
  );
};
export default Posts;
