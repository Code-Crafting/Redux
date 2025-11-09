const Button = ({
  icon: Icon,
  type = "button",
  text = "Button",
  fn,
  customStyle = "bg-gray-200 hover:bg-gray-300 border-2",
  width = "w-32",
  fontSize = "text-lg",
  iconSize = "text-lg",
}) => {
  return (
    <button
      type={type}
      className={`${width} ${
        Icon ? "flex items-center gap-2" : ""
      } cursor-pointer py-2 rounded-md ${fontSize} ${customStyle}`}
      onClick={fn}
    >
      {Icon && <Icon className={iconSize} />}
      {text}
    </button>
  );
};

export default Button;
