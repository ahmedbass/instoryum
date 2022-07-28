import ProfileHeader from "../components/profile/header/ProfileHeader";
import ProfilePosts from "../components/profile/ProfilePosts";
import Head from "next/head";

const UserProfilePage = (props) => {
  const name = "Name (@username)";
  return (
    <div className="w-full">
      <Head>
        <title>{name} &bull; My Instagram</title>
      </Head>
      <ProfileHeader />
      <ProfilePosts />
    </div>
  );
};
export default UserProfilePage;
