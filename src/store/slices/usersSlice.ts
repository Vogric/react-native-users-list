import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserDetail } from '@src/types';

interface UsersState {
  users: User[];
  selectedUser: User | null;
  usersWithDetails: UserDetail[] | null;
  selectedUserToEdit: UserDetail | null;
  cleanDetailsUser: UserDetail | null;
}

const initialState: UsersState = {
  users: [],
  selectedUser: null,
  usersWithDetails: null,
  selectedUserToEdit: null,
  cleanDetailsUser: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>): void => {
      state.users = action.payload;
    },
    setSelectedUser: (state, action: PayloadAction<User | null>): void => {
      state.selectedUser = action.payload;
    },
    setUsersWithDetails: (
      state,
      action: PayloadAction<UserDetail[] | null>
    ): void => {
      state.usersWithDetails = action.payload;
    },
    setSelectedUserToEdit: (
      state,
      action: PayloadAction<UserDetail | null>
    ): void => {
      state.selectedUserToEdit = action.payload;
    },
    setCleanDetailsUser: (
      state,
      action: PayloadAction<UserDetail | null>
    ): void => {
      state.selectedUserToEdit = action.payload;
    },
  },
});

export const {
  setUsers,
  setSelectedUser,
  setUsersWithDetails,
  setSelectedUserToEdit,
  setCleanDetailsUser,
} = usersSlice.actions;

export default usersSlice.reducer;
