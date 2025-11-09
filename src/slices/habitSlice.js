import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  habits: [],
};

export const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (state, action) => {
      state.habits.push({
        id: nanoid(),
        name: action.payload.name,
        frequency: action.payload.frequency,
        isCompleted: false,
      });
    },
    checkCompletion: (state, action) => {
      const foundHabit = state.habits.find(
        (habit) => habit.id === action.payload.id
      );
      foundHabit.isCompleted = !foundHabit.isCompleted;
    },
    removeHabit: (state, action) => {
      state.habits = state.habits.filter(
        (habit) => habit.id !== action.payload.id
      );
    },
  },
});

export const { addHabit, checkCompletion, removeHabit } = habitSlice.actions;
export default habitSlice.reducer;
