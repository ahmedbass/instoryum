const Likes = ({ likes }) => {
  const s = likes.length > 1 ? "s" : "";
  return (
    <p className="font-semibold flex-grow">
      {likes.length ? `${likes.length} like${s}` : "Be the first to like this"}
    </p>
  );
};

const Comments = ({ comments }) => {
  if (!comments?.length) return;
  const s = comments.length > 1 ? "s" : "";
  return (
    <p className="text-gray-500">
      {comments.length} comment{s}
    </p>
  );
};

const Shares = ({ shares }) => {
  if (!shares?.length) return;
  const s = shares.length > 1 ? "s" : "";
  return (
    <p className="text-gray-500">
      {shares.length} share{s}
    </p>
  );
};

const PostStats = ({ likes, comments, shares }) => {
  return (
    <div className={`flex justify-between items-center space-x-4`}>
      <Likes likes={likes} />
      <Comments comments={comments} />
      <Shares shares={shares} />
    </div>
  );
};

export default PostStats;
