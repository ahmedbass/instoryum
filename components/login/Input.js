const Input = ({ type = "text", className, ...rest }) => (
  <input
    type={type}
    className={`px-4 py-2 w-full rounded border bg-gray-100 outline-none ${className}`}
    onClick={(e) => (e.target.value = e.target.value)}
    {...rest}
  />
);
export default Input;
