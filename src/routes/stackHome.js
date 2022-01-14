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
import CodeScreen from '../pages/login/code';

const Stack = createNativeStackNavigator();

const optionSplash = {
  headerShown: false
}
const optionLogin = ({ navigation }) => {

  return {
    title: null,
    headerStyle: {
      backgroundColor: colors.background
    },
    headerShadowVisible: false,
    headerLeft: () => <LeftArrow onPress={() => navigation.goBack()} />
  }
}



const StackHome = () => {

  return (

    <NavigationContainer >
      <Stack.Navigator initialRouteName={routes.splash}>
        <Stack.Screen name={routes.home} options={optionSplash} component={HomeScreen} />
        <Stack.Screen name={routes.splash} options={optionSplash} component={SplashScreen} />
        <Stack.Screen name={routes.login} options={optionLogin} component={LoginScreen} />
        <Stack.Screen name={routes.register} component={HomeScreen} />
        <Stack.Screen name={routes.code} options={optionLogin} component={CodeScreen} />
      </Stack.Navigator>
    </NavigationContainer>


  );
};



export default StackHome;