import { useState } from "react";
import InputField from "../../ui/InputField";
import InputLabel from "../../ui/InputLabel";
import Select from "../../ui/Select";
import TextInput from "../../ui/TextInput";
import Button from "../../ui/Button";
import EachHabit from "./EachHabit";
import { useSelector, useDispatch } from "react-redux";
import { addHabit } from "../../slices/habitSlice";

const Habits = () => {
  const [inputValues, setInputValues] = useState({
    textInput: "",
    selectValue: "",
  });
  const habits = useSelector((state) => state.habits);
  const dispatch = useDispatch();

  const handleSelectValue = (option) => {
    setInputValues((prev) => ({ ...prev, selectValue: option }));
  };

  const handleAddBtn = () => {
    if (!inputValues.textInput || !inputValues.selectValue) return;
    dispatch(
      addHabit({
        name: inputValues.textInput,
        frequency: inputValues.selectValue,
      })
    );

    setInputValues({ textInput: "", selectValue: "" });
  };

  return (
    <div className="max-w-2xl flex-1">
      <h1 className="text-center text-7xl font-medium tracking-wide">
        Habit Tracker
      </h1>

      <div className="mt-8 space-y-4">
        <InputField flexCol={true}>
          <InputLabel htmlFor="habitName" labelName="Habit Name" />
          <TextInput
            id="habitName"
            input={inputValues.textInput}
            onChange={(e) =>
              setInputValues((prev) => ({
                ...prev,
                textInput: e.target.value,
              }))
            }
          />
        </InputField>

        <div>
          <p className="text-xl font-medium">Frequency</p>
          <Select
            options={["Daily", "Weekly"]}
            value={inputValues.selectValue}
            onChange={handleSelectValue}
          />
        </div>

        <Button
          width="w-full"
          text="ADD HABIT"
          customStyle="bg-blue-600 text-white font-medium tracking-wide shadow-btn"
          fn={handleAddBtn}
        />
      </div>

      {habits.length !== 0 && (
        <div className=" mt-8 space-y-4">
          {habits.map((habit) => {
            return (
              <EachHabit
                key={habit.id}
                id={habit.id}
                name={habit.name}
                frequency={habit.frequency}
                isCompleted={habit.isCompleted}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Habits;
