const InputField = ({ children, flexCol = false }) => {
  return <div className={`flex ${flexCol ? "flex-col" : ""}`}>{children}</div>;
};

export default InputField;
