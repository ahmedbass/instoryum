import MyButton from "../../ui/MyButton";
import { useState } from "react";
import MyModal from "../../ui/MyModal";
import { MY_SCROLL } from "../../ui/Layout";
import MyImg from "../../ui/MyImg";

const LikesDetails = ({ isOpen, close, likes }) => {
  if (!likes?.length) return;
  return (
    <MyModal
      isOpen={isOpen}
      onRequestClose={close}
      label="Likes details"
      className="md:max-w-[80%] md:w-[30rem] md:h-[40rem] max-h-screen flex-col"
      closeBackBtn
    >
      <h1 className="text-center w-full h-fit font-semibold text-lg border-b p-2">Likes</h1>
      <ul className={MY_SCROLL}>
        {likes.map((like, i) => (
          <li key={`likes-${i}`} className="px-4 py-2 row-center-v justify-between space-x-4">
            <MyImg size={2} rounded />
            <div className="flex-grow">
              <p className="font-semibold">{like}</p>
              <p className="text-gray-500 capitalize">{like.replaceAll("_", " ")}</p>
            </div>
            <MyButton filled>Follow</MyButton>
          </li>
        ))}
      </ul>
    </MyModal>
  );
};

const Likes = ({ likes }) => {
  const [open, setOpen] = useState(false);

  if (!likes?.length) return <p className="text-gray-700">Be the first to like this</p>;

  const s = likes.length > 1 ? "s" : "";
  return (
    <>
      <div className="flex-grow">
        <MyButton neutral bold onClick={setOpen.bind(this, true)}>
          {likes.length} like{s}
        </MyButton>
      </div>

      <LikesDetails likes={likes} isOpen={open} close={setOpen.bind(this, false)} />
    </>
  );
};

export default Likes;
