import { useState } from "react";
import MyButton from "../ui/MyButton";
import MyLogo from "../ui/MyLogo";
import LoginWithFB from "./LoginWithFB";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const Or = () => (
  <div className="row-center w-full">
    <span className="border-b border-gray-300 flex-grow"></span>
    <p className="text-sm text-gray-500 px-5 font-semibold">OR</p>
    <span className="border-b border-gray-300 flex-grow"></span>
  </div>
);

const BottomPart = ({ inOrUp, setInOrUp }) => (
  <div className="p-4 row-center sm:bg-white sm:border border-gray-300 rounded mt-4 space-x-1">
    <p className="text-gray-700">
      {inOrUp ? "Don't have an account?" : "Already have an account?"}
    </p>
    <MyButton onClick={() => setInOrUp(!inOrUp)}>Sign {inOrUp ? "up" : "in"}</MyButton>
  </div>
);

const LoginCard = (props) => {
  const [inOrUp, setInOrUp] = useState(true);

  return (
    <>
      <div className="col-center-h px-2 xs:px-6 sm:px-10 py-6 sm:bg-white sm:border border-gray-300 rounded">
        <MyLogo layout="relative w-full h-20 m-6" noLink />
        {inOrUp ? <SignInForm /> : <SignUpForm />}
        <Or />
        <LoginWithFB />
        <MyButton small>Forgot password?</MyButton> {/*providerId={providers.facebook.id} */}
      </div>
      <BottomPart inOrUp={inOrUp} setInOrUp={setInOrUp} />
    </>
  );
};
export default LoginCard;
