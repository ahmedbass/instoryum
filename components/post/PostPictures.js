import { Keyboard, Lazy, Mousewheel, Navigation, Pagination, Virtual, Zoom } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/keyboard";
import "swiper/css/mousewheel";
import "swiper/css/virtual";
import "swiper/css/zoom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { BiExpandAlt } from "react-icons/bi";
import Image from "next/image";
import FloatingIcon from "../ui/FloatingIcon";

const PaginationFraction = ({ activeIndex, total }) => {
  const HIDE_AFTER = 1500;
  const [showIndex, setShowIndex] = useState(false);

  useEffect(() => {
    setShowIndex(true);
    const cancelId = setTimeout(() => setShowIndex(false), HIDE_AFTER);
    return () => clearTimeout(cancelId);
  }, [activeIndex]);

  if (!showIndex || total <= 1) return;
  return (
    <div className="absolute top-[3%] right-[2%] px-3 py-1 bg-black/50 text-white text-sm rounded-full z-10 select-none">
      {activeIndex}/{total}
    </div>
  );
};

const ZoomImage = () => {
  const swiper = useSwiper();
  return (
    <FloatingIcon
      icon={BiExpandAlt}
      className="absolute bottom-2 left-4  z-10"
      onClick={() => swiper.zoom.toggle()}
    />
  );
};

const PostPictures = ({
  pictures,
  aspectRatio,
  caption,
  likePost,
  allowZoom = false,
  allowKeyboard = false,
  priority,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const width = aspectRatio >= 1 ? 800 : 680;
  const height = width / aspectRatio;

  const currentUser = "ahmed__3d";

  if (!pictures?.length) return;
  return (
    <Div className={`relative bg-gray-900`} onDoubleClick={likePost}>
      <PaginationFraction activeIndex={activeIndex + 1} total={pictures.length} />

      <Swiper
        modules={[Virtual, Navigation, Pagination, Keyboard, Mousewheel, Zoom, Lazy]}
        enabled={true}
        virtual
        direction="horizontal"
        speed={400}
        navigation={{ enabled: true }}
        mousewheel={{ forceToAxis: true }}
        onSlideChange={(e) => setActiveIndex(e.activeIndex)}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: Math.min(pictures.length - 2, 5),
          // el: ".pagination",
        }}
        keyboard={{ enabled: allowKeyboard, onlyInViewport: true }}
        zoom={{ toggle: allowZoom, maxRatio: 2 }}
        onDoubleClick={(e) => (e.zoom.scale === 1 ? e.zoom.in() : e.zoom.out())}
        lazy={{
          enabled: allowKeyboard,
          loadPrevNext: true,
          loadPrevNextAmount: 2,
          loadOnTransitionStart: true,
        }}
      >
        {pictures.map((picture, i) => (
          <SwiperSlide key={picture} virtualIndex={i} className="row-center" zoom={true}>
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

        {allowZoom && <ZoomImage />}
      </Swiper>

      {/*<div className="pagination absolute -bottom-10 w-30 h-10 bg-black/20" />*/}
    </Div>
  );
};

const Div = styled.div`
  .swiper-pagination-bullets-dynamic {
    padding: 0.5rem 0;
  }

  .swiper-pagination-bullet {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
    //width: 0.4rem;
    //height: 0.4rem;
    //box-shadow: 0 0 10px 4px rgba(255, 255, 255, 0.3);
  }

  .swiper-pagination-bullet-active {
    background-color: #0095f6;
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
    width: 1rem;
    height: 1rem;
    padding: 1rem;
    background: rgba(0, 0, 0, 50%);
    border-radius: 50%;
    color: rgba(255, 255, 255, 75%);
    font-weight: bold;
    outline: 0;
    transition: background-color 0.2s ease, color 0.2s ease;

    &:hover {
      color: white;
      background: black;
    }

    &::after {
      font-size: 0.9rem;
      margin-top: 2px;
    }

    @media (min-width: 800px) {
      display: flex;
    }
  }

  .swiper-button-prev {
    &:after {
      position: relative;
      left: -1px;
    }
  }

  .swiper-button-next {
    &:after {
      position: relative;
      left: 1px;
    }
  }

  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    left: 10px;
    right: auto;
  }

  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    right: 10px;
    left: auto;
  }

  .swiper-button-prev.swiper-button-disabled,
  .swiper-button-next.swiper-button-disabled {
    opacity: 0;
    cursor: auto;
    pointer-events: none;
  }
`;

export default PostPictures;
