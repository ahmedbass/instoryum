import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { auth, db } from "../../lib/firebase";
import MyButton from "../ui/MyButton";
import Input from "./Input";
import PasswordField from "./PasswordField";

const SignUpForm = (props) => {
  // const formik = useFormik({});
  const [allowSubmit, setAllowSubmit] = useState(false);
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const isEmpty = useCallback(
    () =>
      !username.trim().length ||
      !fullName.trim().length ||
      !email.trim().length ||
      !password.trim().length,
    [email, fullName, password, username]
  );

  const isValidEmail = useCallback(
    () =>
      email.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ),
    [email]
  );

  const isValidUsername = useCallback(
    () => username.trim().length >= 3 && !username.trim().includes(" "),
    [username]
  );
  const isValidPassword = useCallback(
    () => password.trim().length >= 6 && password.trim().length <= 18,
    [password]
  );

  useEffect(() => {
    setAllowSubmit(!isEmpty());
  }, [isEmpty, isValidEmail]);

  const handleValidation = () => {
    let messages = "";
    if (isEmpty()) messages += "Please fill in all fields.\n";
    if (!isValidEmail()) messages += "Email is invalid.\n";
    if (!isValidUsername())
      messages += "Username must be longer than 3 characters with no spaces.\n";
    if (!isValidPassword()) messages += "Password must be between 6 and 18 characters.\n";

    if (messages) {
      toast.error(messages.trim(), { id: "errorMessages" });
      return false;
    }
    return true;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!handleValidation()) return;
    setLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, `users/${user.uid}`), { username, email, fullName });
    } catch (e) {
      if (e.toString().includes("email-already-in-use"))
        toast.error("A user with that email already exists.\n");
      else {
        toast.error("Oops! Something went wrong.");
        console.log(e, "Oops!");
      }
    }
    setLoading(false);
  };

  const errorIndicator = !isEmpty() && "border-red-500";

  return (
    <form onSubmit={handleSignup}>
      <div className="space-y-3 w-full">
        <Input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={!isValidEmail() && errorIndicator}
        />
        <Input
          type="text"
          placeholder="Full Name"
          autoCapitalize="words"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={!isValidUsername() && errorIndicator}
        />

        <PasswordField
          password={password}
          setPassword={setPassword}
          className={!isValidPassword() && errorIndicator}
          autoComplete="new-password"
        />
      </div>

      <MyButton
        filled
        responsive
        className="my-6"
        disabled={!allowSubmit || loading}
        loading={loading}
      >
        <p className="mx-2">{loading ? "Signing Up..." : "Sign Up"}</p>
      </MyButton>
    </form>
  );
};

export default SignUpForm;
