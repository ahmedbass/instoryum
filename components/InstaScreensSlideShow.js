import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";

const SLIDE_DURATION = 4000;
const screenshots = ["s1.png", "s2.png", "s3.png", "s4.png"];

const InstaScreensSlideShow = () => {
  const [screenIndex, setScreenIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setScreenIndex((i) => (i >= screenshots.length - 1 ? 0 : i + 1)),
      SLIDE_DURATION
    );
    return () => clearInterval(id);
  }, []);

  return (
    <Div className="relative hidden lg:block">
      <Image
        src="/insta_screens/bg.png"
        alt="insta-bg"
        width={520}
        height={700}
        objectFit="contain"
        layout="fixed"
      />
      <div className="absolute top-7 left-[29.5%] z-10">
        <Image
          src={`/insta_screens/${screenshots[screenIndex]}`}
          alt="insta-screenshot"
          width={320}
          height={600}
          objectFit="contain"
          layout="fixed"
          className="slides"
        />
      </div>
    </Div>
  );
};

export default InstaScreensSlideShow;

const Div = styled.div`
  .slides {
    animation: fade 4s ease-in infinite;

    @keyframes fade {
      0% {
        opacity: 0;
      }
      20% {
        opacity: 1;
      }
      80% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
`;
