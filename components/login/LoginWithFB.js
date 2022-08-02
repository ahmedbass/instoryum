import { signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";
import { ImFacebook2 } from "react-icons/im";
import { auth, fbAuthProvider } from "../../lib/firebase";
import { useSetDoc } from "../../lib/myHooks";
import MyButton from "../ui/MyButton";
import MyIcon from "../ui/MyIcon";

const LoginWithFB = ({ providerId }) => {
  const setDoc = useSetDoc();
  const loginWithFb = async () => {
    try {
      const result = await signInWithPopup(auth, fbAuthProvider);
      const user = result.user;
      await setDoc(`users/${user.uid}`, {
        email: user.email,
        fullName: user.displayName,
        username: user.displayName.toLowerCase().replace(" ", "_"),
        profilePicture: user.photoURL,
        emailVerified: user.emailVerified,
      });
      // user.OtherAccessToken = FacebookAuthProvider.credentialFromResult(result).accessToken;
    } catch (e) {
      toast.error("Oops! Something went wrong");
      console.log("Oops auth error", { e });
    }
  };

  return (
    <MyButton neutral bold className="my-6 flex space-x-2" onClick={loginWithFb}>
      {/* onClick={() => signIn(providerId, { callbackUrl: "/" })}*/}
      <MyIcon Icon={ImFacebook2} hover={false} size={2} className="text-blue-700" />
      <p className="text-blue-700">Log in with Facebook</p>
    </MyButton>
  );
};
export default LoginWithFB;
