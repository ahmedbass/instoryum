import { useEffect, useState } from "react";
import MyModal from "../ui/MyModal";
import StoryPlayer from "./StoryPlayer";

const StoriesSlider = ({ openStoryId, closeStories, stories }) => {
  const [activeStory, setActiveStory] = useState();
  useEffect(() => {
    if (!openStoryId) return;
    setActiveStory(stories.findIndex((story) => story.username === openStoryId));
  }, [openStoryId, stories]);

  if (!stories[activeStory]) return;
  return (
    <MyModal
      label="StoryPlayer modal"
      isOpen={!!openStoryId}
      onRequestClose={closeStories}
      overlayClassName="!bg-black/95"
      className="md:w-[calc(80vh*.66)] md:max-h-[94vh] col-center bg-gray-900 text-white border-none !overflow-visible"
    >
      {/*<MySwiper*/}
      {/*  speed={400}*/}
      {/*  enablePagination={true}*/}
      {/*  enableKeyboard={true}*/}
      {/*  enableZoom={false}*/}
      {/*  onSlideChange={(e) => setActiveSlide(e.activeIndex)}*/}
      {/*>*/}
      <StoryPlayer
        username={stories[activeStory].username}
        userPicture={stories[activeStory].userPicture}
        stories={stories[activeStory].stories}
        closeStory={closeStories}
      />
      {/*</MySwiper>*/}
    </MyModal>
  );
};
export default StoriesSlider;
