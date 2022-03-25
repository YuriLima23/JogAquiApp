/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { getAuth } from './src/api/resouceUser';
import Loading from './src/components/loading/Loading';
import GeneralContext, { GeneralContextProvider } from './src/contexts/generalContext';
import SplashScreen from './src/pages/splash';
import StackHome from './src/routes/stackHome';
import { authFirebase, listenerAuth, listeningEventMessage } from './src/utils/Firebase';

import { getCanalNotification } from './src/utils/Notification';

const App = () => {
  useEffect(() => {
    // authFirebase()
    getCanalNotification()
    listeningEventMessage()
    // getAuth()
  }, [])

  return (
    <GeneralContextProvider >
      <StackHome />
    </GeneralContextProvider>
  );
};



export default App;