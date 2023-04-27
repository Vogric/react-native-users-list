import React from 'react';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextInput } from 'react-native';
import { onChangeText } from '@src/store/slices/inputUserNumberSlice';
import styles from './styles';
import { RootState } from '@src/store/reducers';

const Input: FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleTextChange = (text: string): void => {
    dispatch(onChangeText(text));
  };

  const inputUserNumber = useSelector(
    (state: RootState) => state.input.inputUserNumber
  );

  return (
    <TextInput
      style={styles.input}
      onChangeText={handleTextChange}
      placeholder="0"
      value={inputUserNumber}
      keyboardType="numeric"
      maxLength={1}
    />
  );
};

export default Input;
