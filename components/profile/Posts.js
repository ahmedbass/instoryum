const Post = ({ post }) => (
  <div
    className="bg-gray-400 hover:bg-gray-500 cursor-pointer
   flex justify-center items-center text-white aspect-square"
  >
    <p className="text-5xl font-light">{post}</p>
  </div>
);

const Posts = ({ posts }) => {
  return (
    <div className="grid grid-cols-3 gap-1 md:gap-6 auto-rows-fr">
      {posts?.map((record) => (
        <Post key={record} post={record} />
      ))}
    </div>
  );
};
export default Posts;
