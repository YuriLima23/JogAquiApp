/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import SplashScreen from './src/pages/splash';
import StackHome from './src/routes/stackHome';
import { authFirebase , listeningEventMessage} from './src/utils/Firebase';

import { getCanalNotification } from './src/utils/Notification';

const App = () => {
  useEffect(() => {
    authFirebase()
    getCanalNotification()
    listeningEventMessage()
  }, [])

  return (<StackHome />);
};



export default App;