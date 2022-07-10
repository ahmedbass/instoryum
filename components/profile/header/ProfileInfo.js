import {applyLineBreaks} from "../../../utils";

const Info = ({name, bio, website, className}) => (
    <div className={`text-sm sm:text-base md:text-lg leading-5 ${className}`}>
      <h3 className="font-semibold">{name}</h3>
      <span className="whitespace-pre-line">{applyLineBreaks(bio)}</span>
      <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-800 font-semibold"
      >
        {website.replace("https://www.", "")}
      </a>
    </div>
);

const FollowedBy = ({following}) => {
  if (!following?.length) return;
  const followee = following.slice(0, 2).join(", ").toLowerCase();
  const remaining = following.length - 2;

  const heavy = "font-semibold text-gray-700 group-active:text-gray-400";
  return (
      <button
          className="text-start text-xs sm:text-sm space-x-1 font-semibold text-gray-500 group active:text-gray-400">
        <span>Followed by</span>
        <b className={heavy}>{followee}</b>
        {remaining > 0 && (
            <span>
          and <b className={heavy}>{remaining}</b> others
        </span>
        )}
      </button>
  );
};

const ProfileInfo = ({name, bio, website, following}) => {
  return (
      <div className="col-span-2 md:col-start-2 space-y-2 px-4 md:p-0 text-gray-700">
        <Info name={name} bio={bio} website={website}/>
        <FollowedBy following={following}/>
      </div>
  );
};
export default ProfileInfo;
