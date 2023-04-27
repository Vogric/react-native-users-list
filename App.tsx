import { FC } from 'react';
import { Provider } from 'react-redux';
import store from '@src/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppNavigator from '@src/navigation/AppNavigator';

const queryClient = new QueryClient();

const App: FC = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
