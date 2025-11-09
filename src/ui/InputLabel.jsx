const InputLabel = ({ labelName, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="text-xl font-medium">
      {labelName}
    </label>
  );
};

export default InputLabel;
