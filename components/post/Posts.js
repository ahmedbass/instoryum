import { useCollectionListener } from "../../lib/myHooks";
import Post from "./Post";
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../lib/firebase";
import PostDetailsModal from "./PostDetailsModal";

const Posts = (props) => {
  const posts = useCollectionListener({
    path: "posts",
    order: { by: "createdAt", direction: "desc" },
    limitNum: 10,
  });

  if (!posts?.length) return "No posts available at the moment";
  return (
    <>
      <div className="w-full col-center-h lg:items-start md:space-y-4">
        {posts.map((post, i) => (
          <Post
            key={post.id}
            id={post.id}
            pictures={post.pictures}
            aspectRatio={post.aspectRatio}
            author={post.author}
            caption={post.caption}
            hashtags={post.hashtags}
            createdAt={post.createdAt?.seconds * 1000}
            priority={i <= 1}
          />
        ))}
      </div>

      <PostDetailsModal />
    </>
  );
};
export default Posts;
