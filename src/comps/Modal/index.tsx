import { FC, ReactNode } from 'react';
import { Modal, Text, Pressable, View } from 'react-native';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  hideDetailModal,
  hideEditUserModal,
} from '@src/store/slices/modalSlice';
import { RootState } from '@src/store/reducers';

export enum MODAL_TYPE {
  DETAIL = 'detail',
  EDIT = 'edit',
}

interface ModalProps {
  children: ReactNode;
  modalType: MODAL_TYPE.DETAIL | MODAL_TYPE.EDIT;
}

const CustomModal: FC<ModalProps> = ({ children, modalType }) => {
  const dispatch = useDispatch();
  const { detailModalVisible, editUserModalVisible } = useSelector(
    (state: RootState) => state.modal
  );

  const hideModal = (): void => {
    if (modalType === MODAL_TYPE.DETAIL) {
      dispatch(hideDetailModal());
    }
    if (modalType === MODAL_TYPE.EDIT) {
      dispatch(hideEditUserModal());
    }
  };

  const visible =
    (modalType === MODAL_TYPE.DETAIL && detailModalVisible) ||
    (modalType === MODAL_TYPE.EDIT && editUserModalVisible);

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={styles.centeredView}>
          <View
            style={
              editUserModalVisible ? styles.editProfileModal : styles.modalView
            }
          >
            <Pressable
              style={[
                styles.button,
                editUserModalVisible
                  ? styles.editProfileModalButtonClose
                  : styles.buttonClose,
              ]}
              onPress={hideModal}
            >
              <Text style={styles.textStyle}>X</Text>
            </Pressable>
            {children}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomModal;
