import { useRef, useState } from "react";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { ImVolumeMedium, ImVolumeMute, ImVolumeMute2 } from "react-icons/im";
import { useRecoilState } from "recoil";
import { storyMuteAtom } from "../../atom/StoryAtom";
import ImagesNav from "../ui/ImagesNav";
import MyButton from "../ui/MyButton";
import MyCloseIcon from "../ui/MyCloseIcon";
import MyIcon from "../ui/MyIcon";
import MyImg from "../ui/MyImg";
import MyInput from "../ui/MyInput";

const StoryInfo = ({ username, userPicture, postedSince }) => {
  return (
    <div className="row-center-v space-x-3 flex-grow">
      <MyImg src={userPicture} rounded size={1} />
      <h1 className="text-white">{username}</h1>
      <p className="text-gray-200 text-sm tracking-wider">{postedSince}</p>
    </div>
  );
};

const VideoControls = ({ togglePlay, toggleMute, closeStory, isPlaying, isMute }) => {
  return (
    <div className="row-center-v space-x-1 xs:space-x-3">
      <MyButton autoFocus onClick={togglePlay} className="outline-none">
        <MyIcon Icon={isPlaying ? BsPauseFill : BsPlayFill} className="text-white" hover={false} />
      </MyButton>

      <MyButton onClick={toggleMute} onKeyDown={(e) => e.key === " " && toggleMute(e)}>
        <MyIcon
          Icon={isMute ? ImVolumeMute2 || ImVolumeMute : ImVolumeMedium}
          className="text-white"
          hover={false}
          size={2}
        />
      </MyButton>

      <MyButton onClick={closeStory}>
        <MyCloseIcon className="text-white" hover={false} />
      </MyButton>
    </div>
  );
};

const Progressbar = ({ storiesCount, activeIndex, progress }) => {
  return (
    <ul className="flex space-x-1">
      {Array.from({ length: storiesCount }).map((a, i) => (
        <li key={i * 100 + "story"} className={`w-full h-0.5 bg-white/50`}>
          <div
            className={`h-full bg-white duration-[250ms] ease-linear origin-left ${
              progress < 1 && "transition-transform"
            }`}
            style={{ transform: `scaleX(${i < activeIndex ? 1 : i > activeIndex ? 0 : progress})` }}
          />
        </li>
      ))}
    </ul>
  );
};

const StoryPlayer = ({ username, userPicture, stories, closeStory }) => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const ref = useRef();
  const [isMute, setIsMute] = useRecoilState(storyMuteAtom);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [comment, setComment] = useState("");

  const play = () => ref.current.play();
  const pause = () => ref.current.pause();
  const handleTogglePlay = (e) => {
    e.preventDefault();
    e.stopPropagation();
    ref.current?.paused ? play() : pause();
  };

  const handleToggleMute = (e) => {
    e.preventDefault();
    e.stopPropagation();
    ref.current.muted = !ref.current.muted;
  };

  const previous = () => activeStoryIndex > 0 && setActiveStoryIndex(activeStoryIndex - 1);
  const next = () =>
    activeStoryIndex < stories.length - 1 && setActiveStoryIndex(activeStoryIndex + 1);

  const handleKeyPress = (e) => {
    // console.log(e.key);
    e.key === " " && handleTogglePlay(e);
    e.key === "m" && handleToggleMute(e);
    e.key === "ArrowLeft" && previous();
    e.key === "ArrowRight" && next();
  };

  const overlayTopShadow =
    "before:w-full before:absolute before:top-0 before:bg-gradient-to-b before:from-gray-700/40 before:aspect-[5/1] before:-z-10";
  const overlayBottomShadow =
    "after:w-full after:absolute after:bottom-0 after:bg-gradient-to-t after:from-gray-700/40 after:aspect-[4/1] after:-z-10";

  return (
    <>
      <div className="relative h-full row-center rounded-xl overflow-hidden outline-none select-none">
        <video
          ref={ref}
          src={stories[activeStoryIndex]}
          autoPlay
          className="h-full"
          muted={isMute}
          onPlay={setIsPlaying.bind(this, true)}
          onPause={setIsPlaying.bind(this, false)}
          onVolumeChange={(e) => setIsMute(e.target.muted)}
          onLoadedData={(e) => setDuration(e.target.duration)}
          onTimeUpdate={(e) => setProgress(e.target.currentTime / duration)}
          onEnded={next}
        >
          <source src={stories[activeStoryIndex]} />
          StoryPlayer cannot be played
        </video>

        <div
          className={`absolute top-0 left-0 right-0 py-5 w-full h-full z-10 ${overlayTopShadow} ${overlayBottomShadow}`}
          tabIndex={0}
          onMouseDown={(e) => e.target === e.currentTarget && pause()}
          onMouseUp={(e) => e.target === e.currentTarget && play()}
          onKeyDown={handleKeyPress}
        >
          <div className="space-y-3 px-4">
            <Progressbar
              progress={progress}
              storiesCount={stories.length}
              activeIndex={activeStoryIndex}
            />
            <div className="row-center-v justify-between font-semibold z-20">
              <StoryInfo username={username} userPicture={userPicture} postedSince={"12h"} />
              <VideoControls
                togglePlay={handleTogglePlay}
                toggleMute={handleToggleMute}
                closeStory={closeStory}
                isPlaying={isPlaying}
                isMute={isMute}
              />
            </div>
          </div>

          <span className="absolute bottom-4 left-0 right-0 text-center">
            <MyInput
              placeholder={`Reply to ${username}'s story...`}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="border w-[95%] py-3 px-6 bg-transparent placeholder:text-gray-200 z-10"
            />
          </span>
        </div>
      </div>

      <ImagesNav
        previousDisabled={activeStoryIndex <= 0}
        nextDisabled={activeStoryIndex >= stories.length - 1}
        onPreviousClick={previous}
        onNextClick={next}
        isActive={true}
        layout={"absolute-center w-full md:w-[130%] z-10"}
        size={1}
      />
    </>
  );
};
export default StoryPlayer;
