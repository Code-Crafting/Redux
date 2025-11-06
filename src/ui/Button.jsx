const Button = ({
  type = "button",
  text = "Button",
  fn,
  customStyle = "bg-gray-200 hover:bg-gray-300",
}) => {
  return (
    <button
      type={type}
      className={`w-32 border-2 cursor-pointer py-2 rounded-md text-lg ${customStyle}`}
      onClick={fn}
    >
      {text}
    </button>
  );
};

export default Button;
