import { useState } from "react";
import Button from "../ui/Button";
import InputField from "../ui/InputField";
import TextInput from "../ui/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../todo/todoSlice.js";

const Todo = () => {
  const [input, setInput] = useState("");
  const todos = useSelector((store) => store.todos);
  const dispatch = useDispatch();

  const handleAddBtn = () => {
    dispatch(addTodo({ text: input }));
    setInput("");
  };

  return (
    <div className="w-xl">
      <InputField>
        <TextInput input={input} onChange={(e) => setInput(e.target.value)} />
        <Button text="Add" fn={handleAddBtn} />
      </InputField>

      <ul className="mt-4 space-y-2">
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-gray-300 rounded-md p-4"
            >
              <p className="text-xl">{todo.text}</p>
              <Button
                text="Delete"
                customStyle="bg-red-300 hover:bg-red-400"
                fn={() => dispatch(removeTodo({ todoId: todo.id }))}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
