import MyImg from "../../ui/MyImg";
import ProfileStats from "./ProfileStats";
import ProfileInfo from "./ProfileInfo";
import ProfileActions from "./ProfileActions";
import Username from "./Username";

const ProfileHeader = (props) => {
  return (
    <section
      className="grid grid-cols-[max-content_minmax(100px,_1fr)] md:grid-cols-[minmax(max-content,35%)_65%]
        gap-y-4 pt-3 md:pb-10 md:border-b border-gray-300"
    >
      <div className="justify-self-start md:justify-self-center col-start-1 col-span-1 md:row-span-3 pl-3 pr-6">
        <MyImg src="/demo_pp.jpg" size={4} rounded colorful />
      </div>

      <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-10 md:items-center">
        <Username username={"theglocal"} isVerified={true} />
        <ProfileActions
          isMyself={true}
          amFollowing={true}
          isFollowingMe={true}
        />
      </div>

      <ProfileStats
        posts={10394}
        followers={1022340}
        following={63}
        className="row-start-3 md:row-start-2 col-span-2 md:col-start-2"
      />

      <ProfileInfo
        name="The Glocal"
        bio="We're global but also kinda لوكال.\nYour 1 stop for entertainment in the Middle East!"
        website="https://www.theglocal.com"
        following={[
          "someone_I_follow",
          "another_one",
          "someone_else",
          "someone_else2",
        ]}
      />
    </section>
  );
};
export default ProfileHeader;
