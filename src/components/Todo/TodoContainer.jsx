import { AiOutlineDelete } from "react-icons/ai";
import Icon from "../../ui/Icon";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../../todo/todoSlice";
import { CiEdit } from "react-icons/ci";

const TodoContainer = ({ setInput, setIsUpdating, setInputId }) => {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todos);

  const handleEditBtn = (todoId, todoText) => {
    setInput(todoText);
    setIsUpdating(true);
    setInputId(todoId);
  };

  return (
    <ul className="mt-4 space-y-2">
      {todos.map((todo) => {
        return (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-gray-300 rounded-md p-4"
          >
            <p className="text-xl">{todo.text}</p>

            <div className="flex gap-2">
              <Icon
                icon={CiEdit}
                bgColor="bg-yellow-500"
                fn={() => handleEditBtn(todo.id, todo.text)}
              />
              <Icon
                icon={AiOutlineDelete}
                bgColor="bg-red-500"
                fn={() => dispatch(removeTodo({ todoId: todo.id }))}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoContainer;
