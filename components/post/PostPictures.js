import Image from "next/image";
import { useEffect, useState } from "react";
import { BiExpandAlt } from "react-icons/bi";
import "swiper/css";
import "swiper/css/keyboard";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/virtual";
import "swiper/css/zoom";
import { SwiperSlide, useSwiper } from "swiper/react";
import FloatingIcon from "../ui/FloatingIcon";
import MySwiper from "../ui/MySwiper";

const SlideIndicator = ({ activeIndex, total }) => {
  const HIDE_AFTER = 2000;
  const [showIndex, setShowIndex] = useState(false);

  useEffect(() => {
    setShowIndex(true);
    const cancelId = setTimeout(() => setShowIndex(false), HIDE_AFTER);
    return () => clearTimeout(cancelId);
  }, [activeIndex]);

  if (!showIndex || total <= 1) return;
  return (
    <div className="absolute top-3 right-3 px-3 py-1 bg-black/50 text-white text-sm rounded-full z-10 select-none">
      {activeIndex}/{total}
    </div>
  );
};

const ZoomButton = () => {
  const swiper = useSwiper();
  return (
    <FloatingIcon
      icon={BiExpandAlt}
      className="fixed bottom-2 left-2 z-10"
      onClick={() => swiper.zoom.toggle()}
    />
  );
};

const PostPictures = ({
  pictures,
  aspectRatio,
  caption,
  likePost,
  allowZoom,
  allowKeyboard,
  priority,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const width = aspectRatio >= 1 ? 800 : 680;
  const height = width / aspectRatio;

  const currentUser = "ahmed__3d";

  if (!pictures?.length) return;
  return (
    <div className={`relative bg-gray-900`} onDoubleClick={likePost}>
      <SlideIndicator activeIndex={activeIndex + 1} total={pictures.length} />

      <MySwiper
        speed={400}
        enablePagination={true}
        enableKeyboard={allowKeyboard}
        enableZoom={allowZoom}
        onSlideChange={setActiveIndex}
      >
        {pictures.map((picture, i) => (
          <SwiperSlide key={picture} virtualIndex={i} className="row-center" zoom={allowZoom}>
            {allowZoom ? (
              <img src={picture} alt={caption} width={width} height={height} />
            ) : (
              <Image
                src={picture}
                alt={caption}
                width={width}
                height={height}
                objectFit="cover"
                priority={priority}
              />
            )}
          </SwiperSlide>
        ))}

        {allowZoom && <ZoomButton />}
      </MySwiper>
    </div>
  );
};

export default PostPictures;
