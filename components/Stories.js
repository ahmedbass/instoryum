import { useEffect, useState } from "react";
import minifaker from "minifaker";
import "minifaker/locales/en";
import Story from "./Story";

const getRandomProfilePic = () =>
  `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`;

const Stories = (props) => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    const fakeStories = minifaker.array(20, (i) => ({
      id: i,
      username: minifaker.username({ locale: "en" }).toLowerCase(),
      image: getRandomProfilePic(),
    }));
    setStories(fakeStories);
  }, []);

  return (
    <ul
      className="max-w-full flex items-center overflow-scroll scrollbar-none
      space-x-1.5 bg-white p-4 sm:rounded-xl border border-gray-300"
    >
      {stories.map((story) => (
        <Story
          key={story.id}
          username={story.username}
          image={story.image}
        ></Story>
      ))}
    </ul>
  );
};
export default Stories;
