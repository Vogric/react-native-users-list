import { combineReducers } from 'redux';
import modalSlice from '../slices/modalSlice';
import inputUserNumberSlice from '../slices/inputUserNumberSlice';
import usersSlice from '../slices/usersSlice';

const rootReducer = combineReducers({
  modal: modalSlice,
  input: inputUserNumberSlice,
  users: usersSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
