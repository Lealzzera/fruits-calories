import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'fruits',
  initialState: {
    name: '',
    image: '',
    calories: '',
    protein: '',
    carbo: '',
    fiber: '',
    fat: '',
    portion: ''
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setCalories: (state, action) => {
      state.calories = action.payload;
    },
    setProtein: (state, action) => {
      state.protein = action.payload;
    },
    setCarbo: (state, action) => {
      state.carbo = action.payload;
    },
    setFiber: (state, action) => {
      state.fiber = action.payload;
    },
    setFat: (state, action) => {
      state.fat = action.payload;
    },
    setPortion: (state, action) => {
      state.portion = action.payload;
    }
  }
});

export const { setName, setImage, setCalories, setProtein, setCarbo, setFiber, setFat, setPortion } = slice.actions;

export default slice.reducer;