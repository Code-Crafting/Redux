const TextInput = ({ placeholder = "", input, onChange }) => {
  return (
    <input
      type="text"
      value={input}
      onChange={onChange}
      placeholder={placeholder}
      className="border-2 flex-2 outline-none rounded-lg text-lg px-4"
    />
  );
};

export default TextInput;
