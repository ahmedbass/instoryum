import { useRecoilState } from "recoil";
import { postDetailsModalAtom, selectedPostAtom } from "../../atom/PostDetailsAtom";
import PostHeader from "./PostHeader";
import PostCaption from "./PostCaption";
import PostComments from "./PostComments";
import CommentInput from "./CommentInput";
import MyModal from "../ui/MyModal";
import PostStats from "./PostStats/PostStats";
import PostActions, { likePost, Share } from "./PostActions";
import PostPictures from "./PostPictures";
import { MY_SCROLL } from "../ui/Layout";
import MyBackIcon from "../ui/MyBackIcon";

const PostDetailsModal = () => {
  const [open, setOpen] = useRecoilState(postDetailsModalAtom);
  const [post, setPost] = useRecoilState(selectedPostAtom);

  const closeModal = () => setOpen(false);
  const currentUser = "ahmed__3d";
  const isLiked = post?.likes?.some((like) => like === currentUser);

  const handleLikePost = () => !isLiked && likePost(post.id, currentUser, setPost);

  if (!post) return;
  return (
    <MyModal
      isOpen={open}
      onRequestClose={closeModal}
      label="Post details modal"
      closeBtn={false}
      className={`absolute-center md:max-w-[90%] md:h-[90%] md:w-[80rem] flex bg-gray-900 border-none`}
    >
      <div className="hidden md:block min-w-[35%] w-[65%] my-auto">
        <PostPictures
          pictures={post.pictures}
          aspectRatio={post.aspectRatio}
          likePost={handleLikePost}
          allowKeyboard
          allowZoom
        />
      </div>

      <div className=" bg-white w-full h-full md:w-[35%] md:min-w-[26rem] lg:min-w-[30rem] flex flex-col">
        <div className="row-center-v md:hidden p-4 pb-2 space-x-6">
          <MyBackIcon onClick={closeModal} />
          <h2 className="text-lg font-semibold flex-grow">Comments</h2>
          <Share />
        </div>

        <div className="hidden md:block">
          <PostHeader author={post.author} />
        </div>

        <div className={`${MY_SCROLL} flex-grow`}>
          <PostCaption
            caption={post.caption}
            hashtags={post.hashtags}
            createdAt={post.createdAt}
            username={post.author?.username}
            className="p-4"
            showUsername={true}
            showUserPicture={true}
            expandHashtagByDefault={true}
          />
          <PostComments comments={post.comments} />
        </div>

        <div className="p-4 border-t space-y-4 hidden md:block">
          <PostActions isLiked={isLiked} postId={post.id} />
          <PostStats likes={post.likes} />
        </div>

        <CommentInput postId={post.id} hideInSm={false} />
      </div>
    </MyModal>
  );
};
export default PostDetailsModal;
