import PostsSectionsNav from "./PostsSectionsNav";
import { IoMdGrid } from "react-icons/io";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { RiAccountPinBoxLine } from "react-icons/ri";
import { FiBookmark } from "react-icons/fi";
import { useState } from "react";
import Posts from "./Posts";

const ProfilePosts = (props) => {
  const [activeTab, setActiveTab] = useState(1);
  const sections = [
    {
      name: "posts",
      icon: IoMdGrid,
      onClick: () => {
        setActiveTab(1);
      },
    },
    {
      name: "reals",
      icon: AiOutlinePlayCircle,
      onClick: () => {
        setActiveTab(2);
      },
    },
    {
      name: "videos",
      icon: BiMoviePlay,
      onClick: () => {
        setActiveTab(3);
      },
    },
    {
      name: "tagged",
      icon: RiAccountPinBoxLine,
      onClick: () => {
        setActiveTab(4);
      },
    },
    {
      name: "saved",
      icon: FiBookmark,
      private: true,
      onClick: () => {
        setActiveTab(5);
      },
    },
  ];

  const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const reels = [10, 20, 30, 40, 50, 60, 70];
  const videos = [200, 400, 600, 800];
  const tagged = [22, 33, 44, 55];
  const saved = [1000, 4000, 7000, 10000];
  const data = [posts, reels, videos, tagged, saved];

  return (
    <div>
      <PostsSectionsNav sections={sections} activeTab={activeTab} />

      <Posts posts={data[activeTab - 1]} />
    </div>
  );
};
export default ProfilePosts;
