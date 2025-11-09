const TextInput = ({ placeholder = "", input, onChange, id = "" }) => {
  return (
    <input
      id={id}
      type="text"
      value={input}
      onChange={onChange}
      placeholder={placeholder}
      className="border-2 flex-2 outline-none rounded-md text-lg px-4 py-2"
    />
  );
};

export default TextInput;
