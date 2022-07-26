import PostHeader from "./PostHeader";
import CommentInput from "./CommentInput";
import PostPictures from "./PostPictures";
import PostCaption from "./PostCaption";
import PostActions, {likePost} from "./PostActions";
import PostStats from "./PostStats/PostStats";
import {collection, onSnapshot, orderBy, query} from "firebase/firestore";
import {db} from "../../lib/firebase";
import {useEffect, useState} from "react";
import {useSetRecoilState} from "recoil";
import {selectedPostAtom} from "../../atom/PostDetailsAtom";

const Post = ({id, author, pictures, aspectRatio, createdAt, caption, hashtags, priority}) => {
  const setSelectedPost = useSetRecoilState(selectedPostAtom);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const currentUser = "ahmed__3d";

  useEffect(
      () =>
          onSnapshot(
              query(collection(db, "posts", id, "comments"), orderBy("createdAt", "desc")),
              (snapshot) => setComments(snapshot.docs.map((comment) => comment.data()))
          ),
      [id]
  );
  useEffect(
      () =>
          onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
              setLikes(snapshot.docs.map((like) => like.id))
          ),
      [id]
  );

  const handleSelectPost = () => {
    const postObj = {
      id,
      author,
      pictures,
      aspectRatio,
      createdAt,
      caption,
      hashtags,
      comments,
      likes,
    };
    setSelectedPost(postObj);
  };

  return (
      <div
          className={`bg-white w-full md:max-w-2xl overflow-hidden md:border md:rounded-lg flex flex-col pt-2 md:pt-0`}
      >
        <PostHeader author={author}/>
        <PostPictures
            pictures={pictures}
            caption={caption}
            aspectRatio={aspectRatio}
            likePost={likePost.bind(this, id, currentUser, setSelectedPost)}
            priority={priority}
        />

        <div className={`p-4 space-y-3 border-t`}>
          <PostActions
              postId={id}
              isLiked={likes.some((like) => like === currentUser)}
              selectPost={handleSelectPost}
          />
          <PostStats
              likes={likes}
              comments={comments}
              shares={100}
              onCommentClick={handleSelectPost}
          />

          <PostCaption
              username={author.username}
              caption={caption}
              hashtags={hashtags}
              createdAt={createdAt}
              showUsername={true}
          />
        </div>

        {/*<PostComments comments={comments} />*/}
        <CommentInput postId={id}/>
      </div>
  );
};
export default Post;
