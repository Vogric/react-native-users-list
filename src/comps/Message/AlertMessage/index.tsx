import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface AlertMessageProps {
  title: string;
  message: string;
}

const AlertMessage = ({
  title,
  message,
}: AlertMessageProps): JSX.Element | null => {
  const navigation = useNavigation();

  Alert.alert(
    title,
    message,
    [{ text: 'OK', onPress: () => navigation.goBack() }],
    {
      cancelable: false,
    }
  );

  return null;
};

export default AlertMessage;
