import styled from "styled-components";
import { Keyboard, Lazy, Mousewheel, Navigation, Pagination, Virtual, Zoom } from "swiper";
import "swiper/css";
import "swiper/css/keyboard";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/virtual";
import "swiper/css/zoom";
import { Swiper } from "swiper/react";

const MySwiper = ({
  children,
  onSlideChange,
  enabled = true,
  enableZoom = false,
  enableKeyboard = false,
  enablePagination = true,
  direction = "horizontal",
  speed = 400,
}) => {
  return (
    <Div>
      <Swiper
        modules={[Virtual, Navigation, Pagination, Keyboard, Mousewheel, Zoom, Lazy]}
        virtual
        enabled={enabled}
        direction={direction}
        speed={speed}
        navigation={{ enabled: true }}
        mousewheel={{ forceToAxis: true }}
        onSlideChange={(e) => onSlideChange(e.activeIndex)}
        pagination={{
          enabled: enablePagination,
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 5,
          // el: ".pagination",
        }}
        keyboard={{ enabled: enableKeyboard, onlyInViewport: true }}
        zoom={{ toggle: enableZoom, maxRatio: 2 }}
        onDoubleClick={(e) => (e.zoom.scale === 1 ? e.zoom.in() : e.zoom.out())}
        lazy={{
          enabled: true,
          loadPrevNext: true,
          loadPrevNextAmount: 2,
          loadOnTransitionStart: true,
        }}
      >
        {children}
      </Swiper>
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
    background-color: white;
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
    width: .9rem;
    height: .9rem;
    padding: .9rem;
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

export default MySwiper;
