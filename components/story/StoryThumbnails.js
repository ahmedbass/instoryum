import minifaker from "minifaker";
import "minifaker/locales/en";
import { useEffect, useState } from "react";
import { getRandomProfilePic } from "../../lib/utils";
import MyImg from "../ui/MyImg";
import StoriesSlider from "./StoriesSlider";

const StoryThumbnail = ({ username, image, setOpenStoryId }) => {
  return (
    <li
      className="cursor-pointer flex flex-col justify-center items-center min-w-fit"
      onClick={() => setOpenStoryId(username)}
    >
      <MyImg src={image} alt={username} size={3} rounded colorful />
      <p className="text-xs sm:text-sm text-gray-700 truncate w-16 sm:w-20 text-center m-1 mb-0">
        {username}
      </p>
    </li>
  );
};

const StoryThumbnails = (props) => {
  const [stories, setStories] = useState([]);
  const [openStoryId, setOpenStoryId] = useState();

  useEffect(() => {
    const fakeStories = minifaker.array(20, (i) => ({
      id: i,
      username: minifaker.username({ locale: "en" }).toLowerCase(),
      userPicture: getRandomProfilePic(),
      stories: [
        "/sample_stories/story_1.mp4",
        "/sample_stories/story_2.mp4",
        "/sample_stories/story_3.mp4",
        "/sample_stories/story_4.mp4",
      ],
    }));
    setStories(fakeStories);
  }, []);

  return (
    <>
      <ul
        className="row-center-v overflow-scroll scrollbar-none max-w-full md:max-w-2xl lg:max-w-full
        bg-white border-b md:border md:rounded-lg xs:space-x-1.5 px-1 py-2 xs:px-2 sm:p-4"
      >
        {stories.map((story) => (
          <StoryThumbnail
            key={story.id}
            username={story.username}
            image={story.userPicture}
            setOpenStoryId={setOpenStoryId}
          />
        ))}
      </ul>

      <StoriesSlider
        openStoryId={openStoryId}
        closeStories={setOpenStoryId.bind(this, null)}
        stories={stories}
      />
    </>
  );
};
export default StoryThumbnails;
