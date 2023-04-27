import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InputState {
  inputUserNumber: string;
}

const initialState: InputState = {
  inputUserNumber: '',
};

export const inputUserNumberSlice = createSlice({
  name: 'inputUserNumber',
  initialState,
  reducers: {
    onChangeText: (state, action: PayloadAction<string>): void => {
      state.inputUserNumber = action.payload;
    },
  },
});

export const { onChangeText } = inputUserNumberSlice.actions;

export default inputUserNumberSlice.reducer;
