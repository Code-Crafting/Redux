import { useState } from "react";
import Button from "../../ui/Button.jsx";
import InputField from "../../ui/InputField.jsx";
import TextInput from "../../ui/TextInput.jsx";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../../slices/todoSlice.js";
import TodoContainer from "./TodoContainer.jsx";

const Todo = () => {
  const [input, setInput] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [inputId, setInputId] = useState(null);

  const dispatch = useDispatch();

  const handleBtn = () => {
    if (!input) return;
    if (isUpdating) {
      dispatch(updateTodo({ todoId: inputId, todoText: input }));
      setIsUpdating(false);
    } else {
      dispatch(addTodo({ text: input }));
    }
    setInput("");
  };

  return (
    <div className="w-xl">
      <InputField>
        <TextInput input={input} onChange={(e) => setInput(e.target.value)} />
        <Button text={isUpdating ? "Update" : "Add"} fn={handleBtn} />
      </InputField>

      <TodoContainer
        setInput={setInput}
        setIsUpdating={setIsUpdating}
        setInputId={setInputId}
      />
    </div>
  );
};

export default Todo;
