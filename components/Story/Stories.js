import { useEffect, useState } from "react";
import minifaker from "minifaker";
import "minifaker/locales/en";
import Story from "./Story";
import {getRandomProfilePic} from "../../utils";

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
      className="max-w-full flex items-center sm:rounded-lg bg-white border border-gray-300
       overflow-scroll scrollbar-none xs:space-x-1.5 px-1 py-2 xs:px-2 sm:p-4 "
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
