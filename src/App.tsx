import * as React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {RecoilRoot} from 'recoil';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import RootStackNavigator from './navigators';

const queryClient = new QueryClient();

function App() {
  const ref = useNavigationContainerRef();

  const [initialState] = React.useState();

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <NavigationContainer initialState={initialState} ref={ref}>
            <RootStackNavigator />
          </NavigationContainer>
        </RecoilRoot>
      </QueryClientProvider>
    </SafeAreaView>
  );
}

export default App;
