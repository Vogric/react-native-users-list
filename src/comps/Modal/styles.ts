import { StyleSheet } from 'react-native';
import { theme } from '@src/theme';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: theme.colors.modalBackground,
    borderRadius: 20,
    padding: 14,
    width: 340,
    marginTop: -90,
    alignItems: 'center',
    borderWidth: 4,
    borderColor: theme.colors.purple,
    shadowColor: theme.colors.black,
    elevation: 7,
  },
  editProfileModal: {
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    padding: 14,
    width: 340,
    marginTop: -90,
    alignItems: 'center',
    borderWidth: 4,
    borderColor: theme.colors.green,
    shadowColor: theme.colors.black,
    elevation: 7,
  },
  button: {
    borderRadius: 20,
    width: 35,
    padding: 7,
    alignSelf: 'flex-start',
  },
  buttonClose: {
    backgroundColor: theme.colors.purple,
  },
  editProfileModalButtonClose: {
    backgroundColor: theme.colors.strongGreen,
  },
  textStyle: {
    color: theme.colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    textAlign: 'center',
  },
});

export default styles;
