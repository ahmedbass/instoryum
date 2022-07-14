import MyButton from "../ui/MyButton";

const Likes = ({ likes }) => {
  const s = likes.length > 1 ? "s" : "";
  return (
    <div className="flex-grow">
      {likes.length ? (
        <MyButton bold>
          {likes.length} like{s}
        </MyButton>
      ) : (
        <p className="text-gray-700">Be the first to like this</p>
      )}
    </div>
  );
};

const Comments = ({ comments, setShowComments }) => {
  if (!comments?.length) return;
  const s = comments.length > 1 ? "s" : "";
  return (
    <MyButton onClick={setShowComments}>
      {comments.length} comment{s}
    </MyButton>
  );
};

const Shares = ({ shares }) => {
  if (!shares?.length) return;
  const s = shares.length > 1 ? "s" : "";
  return (
    <MyButton>
      {shares.length} share{s}
    </MyButton>
  );
};

const PostStats = ({ likes, comments, shares, setShowComments }) => {
  return (
    <div className={`flex justify-between items-center space-x-4`}>
      <Likes likes={likes} />
      <Comments comments={comments} setShowComments={setShowComments} />
      <Shares shares={shares} />
    </div>
  );
};

export default PostStats;
