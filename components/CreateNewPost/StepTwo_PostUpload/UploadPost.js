import { useState } from "react";
import { useRecoilValue } from "recoil";
import { postCaption, processedImages } from "../../../atom/CreateNewPostAtom";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import MyButton from "../../ui/MyButton";

const UploadPost = ({ onShareComplete }) => {
  const defaultButtonText = "Share";
  const [buttonText, setButtonText] = useState(defaultButtonText);
  const [isLoading, setIsLoading] = useState(0);

  const outputImages = useRecoilValue(processedImages);
  const caption = useRecoilValue(postCaption);

  const getHashtags = () => caption.split(" ").filter((word) => word.startsWith("#"));
  const getMentions = () => caption.split(" ").filter((word) => word.startsWith("@"));

  const upload = async () => {
    setIsLoading(1);
    setButtonText("Loading...");
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        // pictures: outputImages,
        createdAt: serverTimestamp(),
        caption: caption,
        hashtags: getHashtags(),
        mentions: getMentions(),
        user: {
          userId: "1",
          username: "ahmed__3d",
          profilePicture:
            "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        likes: [],
        shares: [],
        saves: [],
        comments: [],
      });

      await Promise.all(
        outputImages.map(async (image, i) => {
          const storageRef = ref(storage, `posts/${docRef.id}/pic_${i + 1}`);
          const imageBlob = await fetch(image).then((r) => r.blob());
          const snapshot = await uploadBytes(storageRef, imageBlob);
          const downloadUrl = await getDownloadURL(storageRef);
          await updateDoc(doc(db, "posts", docRef.id), {
            pictures: arrayUnion(downloadUrl),
          });
        })
      );

      setIsLoading(2);
      setButtonText("Post Shared Successfully!");
      setTimeout(() => onShareComplete(), 1000);
    } catch (e) {
      setIsLoading(-1);
      setButtonText("Oops... Something went wrong!");
      setTimeout(() => {
        setIsLoading(0);
        setButtonText(defaultButtonText);
      }, 1000);

      console.log("Something went wrong", { e });
    }
  };

  const className =
    isLoading === -1
      ? "bg-red-500 disabled:bg-red-500"
      : isLoading === 2
      ? "bg-green-500 disabled:bg-green-500"
      : "";
  return (
    <div className="flex-grow mt-10 flex items-end p-2">
      <MyButton filled responsive disabled={isLoading !== 0} onClick={upload} className={className}>
        {buttonText}
      </MyButton>
    </div>
  );
};
export default UploadPost;
