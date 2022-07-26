import Post from "./Post";
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../lib/firebase";
import PostDetailsModal from "./PostDetailsModal";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(query(collection(db, "posts"), orderBy("createdAt", "desc")), (snapshot) =>
        setPosts(snapshot.docs)
      ),
    []
  );

  if (!posts?.length) return;
  return (
    <>
      <div className="col-center-h lg:items-start md:space-y-4">
        {posts.map((post, i) => (
          <Post
            key={post.id}
            id={post.id}
            pictures={post.data().pictures}
            aspectRatio={post.data().aspectRatio}
            author={post.data().author}
            caption={post.data().caption}
            hashtags={post.data().hashtags}
            createdAt={post.data().createdAt?.seconds * 1000}
            priority={i <= 1}
          />
        ))}
      </div>

      <PostDetailsModal />
    </>
  );
};
export default Posts;
