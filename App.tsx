import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { AppState } from 'react-native';
import BootSplash from 'react-native-bootsplash';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { checkToken } from './api/user';
import RootNavigation from './navigation/RootNavigation';
import store, { persistor } from './redux/store';

function App() {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      async nextAppState => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          await checkToken();
          //we are coming from background to foreground
        }
        appState.current = nextAppState;
      },
    );
    checkToken();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer
          onReady={() => {
            BootSplash.hide();
          }}
        >
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
