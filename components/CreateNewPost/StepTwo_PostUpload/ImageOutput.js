import {useRecoilState} from "recoil";
import {processedImages} from "../../../atom/CreateNewPostAtom";
import Image from "next/image";
import {useState} from "react";
import ImagesNav from "../../ui/ImagesNav";
import DotCountIndicator from "../../ui/DotCountIndicator";

const ImageOutput = (props) => {
  const [outputImages, setOutputImages] = useRecoilState(processedImages);
  const [index, setIndex] = useState(0);

  return (
      <section
          className={`relative w-full md:w-[60vw] md:max-w-[50rem] h-full md:h-full flex-grow bg-gray-700`}
      >
        <Image src={outputImages[index]} alt="" layout="fill" objectFit="contain" draggable={false}/>
        <ImagesNav
            previousDisabled={index === 0}
            nextDisabled={index >= outputImages.length - 1}
            onPreviousClick={() => setIndex(index - 1)}
            onNextClick={() => setIndex(index + 1)}
        />
        <DotCountIndicator count={outputImages.length} currentActive={index}/>
      </section>
  );
};
export default ImageOutput;
