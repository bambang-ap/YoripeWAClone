import * as React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {RecoilRoot} from 'recoil';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';

const queryClient = new QueryClient();

function App() {
  const ref = React.useRef();

  const [initialState] = React.useState();

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <NavigationContainer initialState={initialState} ref={ref}>
            <RootNavigator />
          </NavigationContainer>
        </RecoilRoot>
      </QueryClientProvider>
    </SafeAreaView>
  );
}

export default App;
