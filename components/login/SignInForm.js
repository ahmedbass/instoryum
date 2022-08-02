import { signInWithEmailAndPassword } from "firebase/auth";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { auth } from "../../lib/firebase";
import MyButton from "../ui/MyButton";
import MyLoader from "../ui/MyLoader";
import Input from "./Input";
import PasswordField from "./PasswordField";

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [success, setSuccess] = useState(false);

  const isEmpty = useCallback(
    () => !username.trim().length || !password.trim().length,
    [password, username]
  );

  useEffect(() => {
    setInvalid(isEmpty());
  }, [isEmpty]);

  const getResponseErrorMessage = useCallback((error) => {
    let message;
    if (error.includes("user-not-found"))
      message =
        "The username/email you entered doesn't belong to an account. Please check and try again.";
    else if (error.includes("wrong-password"))
      message = "Sorry, your password was incorrect. Please double-check your password.";
    else if (error.includes("too-many-requests)"))
      message =
        "Access to this account has been temporarily disabled due to many failed login attempts. " +
        "You can immediately restore it by resetting your password or you can try again later.";
    else if (error.includes("invalid-email")) message = "Invalid email";
    else {
      message = "Oops! Something went wrong.";
      console.log(error, "Oops!");
    }
    return message;
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (isEmpty()) return toast.error("Please enter username/email and password");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, username, password);
      setSuccess(true);
    } catch (e) {
      const message = getResponseErrorMessage(e.toString());
      toast.error(message, { id: "errorMessages" });
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleLogin} className="w-full">
      <Input
        type="text"
        placeholder="Username or email"
        className="my-3"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <PasswordField password={password} setPassword={setPassword} />

      <MyButton
        filled
        responsive
        className={`my-6 flex ${success && "disabled:bg-green-400"}`}
        disabled={invalid || loading || success}
      >
        <MyLoader show={loading} size={0.5} />
        <p className="mx-2">{loading ? "Logging In..." : "Log In"}</p>
      </MyButton>
    </form>
  );
};
export default SignInForm;
