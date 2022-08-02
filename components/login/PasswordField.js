import { useState } from "react";
import MyButton from "../ui/MyButton";
import Input from "./Input";

const PasswordField = ({ password, setPassword, className, ...rest }) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="relative">
      <Input
        type={showPass ? "text" : "password"}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={className}
        {...rest}
      />
      {password.length > 0 && (
        <MyButton
          small
          neutral
          bold
          type="button"
          className="absolute-center-v right-2"
          onClick={() => setShowPass(!showPass)}
        >
          {showPass ? "Hide" : "Show"}
        </MyButton>
      )}
    </div>
  );
};
export default PasswordField;
