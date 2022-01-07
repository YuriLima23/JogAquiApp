/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import HomeScreen from '../pages/home';
import SplashScreen from '../pages/splash';
import LoginScreen from '../pages/login';
import { routes } from './routes';
import { colors } from '../../globalStyle/colors';
import LeftArrow from '../components/arrowLeft/left';
import Feather from "react-native-vector-icons/Feather"

const Stack = createNativeStackNavigator();

const optionSplash = {
  headerShown: false
}
const optionLogin = {
  
  title: null,
  headerStyle: {
    backgroundColor: colors.background
  },
  headerShadowVisible: false,
  headerLeft: ({ goBack }) => <LeftArrow onPress={goBack} />
}

const StackHome = () => {

  return (

    <NavigationContainer >
      <Stack.Navigator initialRouteName={routes.splash}>
        <Stack.Screen name={routes.home} options={optionSplash} component={HomeScreen} />
        <Stack.Screen name={routes.splash} options={optionSplash} component={SplashScreen} />
        <Stack.Screen name={routes.login} options={optionLogin} component={LoginScreen} />
        <Stack.Screen name={routes.register} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>


  );
};



export default StackHome;