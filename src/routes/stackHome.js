/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';

 import { View , Text} from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
 

import HomeScreen from '../pages/home';
import SplashScreen from '../pages/splash';
import { routes } from './routes';
 
 const Stack = createNativeStackNavigator();
 
 const optionSplash = {
  headerShown:false
 }
 
 const StackHome = () => {
 
   return (
 
     <NavigationContainer >
       <Stack.Navigator  initialRouteName={routes.splash}>
         <Stack.Screen name={routes.home} options={optionSplash} component={HomeScreen} />
         <Stack.Screen name={routes.splash} options={optionSplash} component={SplashScreen} />
         <Stack.Screen name={routes.login}  component={HomeScreen} />
         <Stack.Screen name={routes.register} component={HomeScreen} />
       </Stack.Navigator>
     </NavigationContainer>
 
 
   );
 };
 
 
 
 export default StackHome;