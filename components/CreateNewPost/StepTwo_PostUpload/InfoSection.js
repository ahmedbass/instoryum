import { MY_SCROLL } from "../../ui/Layout";
import MyImg from "../../ui/MyImg";
import Caption from "./Caption";
import AddLocation from "./AddLocation";
import PostSettings from "./PostSettings";
import UploadPost from "./UploadPost";

const UserInfo = ({ src, username = "username" }) => (
  <div className="row-center-v space-x-4 p-4">
    <MyImg src={src} size={1} rounded />
    <h3 className="font-semibold text-lg">{username}</h3>
  </div>
);

const InfoSection = ({ onShareComplete }) => {
  return (
    <section
      className={`w-full md:w-[30vw] md:max-w-[25rem] h-full bg-white border-l border-gray-300 flex flex-col ${MY_SCROLL}`}
    >
      <UserInfo />
      <Caption />
      <AddLocation />
      <PostSettings />
      <UploadPost onShareComplete={onShareComplete} />
    </section>
  );
};

export default InfoSection;
