import MyIcon from "../ui/MyIcon";
import { BiExpandAlt } from "react-icons/bi";
import { useState } from "react";

const PostPicture = ({ pictures, caption, picCountIndicators }) => {
  // const imgPos = useSpring({ x: 0, y: 0 });
  // const bindImgPos = useDrag((params) => {
  //   console.log(params.offset[0], params.offset[1]);
  //   // if (!expandPic) return;
  //   if (params.xy[0] <= 0) return;
  //   if (params.xy[1] <= 0) return;
  //   imgPos.x.set(params.offset[0]);
  //   imgPos.y.set(params.offset[1]);
  // });

  // {/*<animated.div*/}
  // {/* {...bindImgPos()}*/}
  // {/*  style={{*/}
  // {/*    x: imgPos.x,*/}
  // {/*    y: imgPos.y,*/}
  // {/*    transform: `scale(${expandPic ? 4 : 1})`,*/}
  // {/*  }}*/}
  // {/*>*/}
  // {/*</animated.div>*/}

  const [expandPic, setExpandPic] = useState(false);
  const size = "w-full h-full max-h-[75vh] lg:min-h-[65vh]";
  return (
    <div
      className={`${size} relative bg-cover bg-no-repeat bg-center bg-gray-300 bg-blend-multiply`}
      style={{ backgroundImage: `url(${pictures[0]})` }}
    >
      <img
        src={pictures[0]}
        alt={caption}
        className={`${size} backdrop-blur-lg object-contain mx-auto select-none pointer-events-none ${
          expandPic && "scale-[2] duration-300"
        }`}
      />

      <div className="absolute bottom-0 w-full hidden sm:grid items-center p-2 grid-cols-3">
        <MyIcon
          Icon={BiExpandAlt}
          size={2}
          className="text-gray-300 drop-shadow"
          onClick={() => setExpandPic(!expandPic)}
        />

        {pictures.length > 1 && (
          <div className="flex justify-self-center">
            {picCountIndicators(pictures.length)}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostPicture;
