import { createSlice } from '@reduxjs/toolkit';

interface ModalsState {
  editUserModalVisible: boolean;
  detailModalVisible: boolean;
}

const initialState: ModalsState = {
  editUserModalVisible: false,
  detailModalVisible: false,
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    showEditUserModal: (state): void => {
      state.editUserModalVisible = true;
    },
    hideEditUserModal: (state): void => {
      state.editUserModalVisible = false;
    },
    showDetailModal: (state): void => {
      state.detailModalVisible = true;
    },
    hideDetailModal: (state): void => {
      state.detailModalVisible = false;
    },
  },
});

export const {
  showEditUserModal,
  hideEditUserModal,
  showDetailModal,
  hideDetailModal,
} = modalsSlice.actions;

export default modalsSlice.reducer;
