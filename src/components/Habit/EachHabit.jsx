import Button from "../../ui/Button";
import { TbCircleCheckFilled } from "react-icons/tb";
import { IoMdTrash } from "react-icons/io";
import { useDispatch } from "react-redux";
import { removeHabit, checkCompletion } from "../../slices/habitSlice";

const EachHabit = ({ id, name, frequency, isCompleted }) => {
  const dispatch = useDispatch();

  const handleRemoveBtn = () => {
    dispatch(removeHabit({ id }));
  };

  const handleCompletion = () => {
    dispatch(checkCompletion({ id }));
  };

  return (
    <div
      className="p-4 bg-white shadow-btn rounded-lg flex items-center justify-between"
      id={id}
    >
      <div>
        <p className="text-lg font-medium capitalize ">{name}</p>
        <p className="capitalize">{frequency}</p>
      </div>

      <div className="flex gap-2">
        <Button
          width="w-max"
          customStyle={`px-2 bg-white border-2 ${
            isCompleted
              ? "border-green-500 text-green-500"
              : "border-blue-500 text-blue-600"
          }`}
          text={isCompleted ? "COMPLETED" : "MARK COMPLETED"}
          fontSize="text-sm"
          icon={TbCircleCheckFilled}
          fn={handleCompletion}
        />

        <Button
          width="w-max"
          customStyle="px-2 bg-white border-2 border-red-500 text-red-500"
          text="REMOVE"
          fontSize="text-sm"
          icon={IoMdTrash}
          fn={handleRemoveBtn}
        />
      </div>
    </div>
  );
};

export default EachHabit;
