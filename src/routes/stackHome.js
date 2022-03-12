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
import LeftArrow from '../components/arrowLeft/Left';
import CodeScreen from '../pages/code';
import RegisterScreen from '../pages/register';
import WelcomeScreen from '../pages/welcome';
import DrawerHome from './drawerHome';
import DemandScreen from '../pages/demand';
import RecycleScreen from '../pages/recycle';
import AddressScreen from '../pages/address';
import DateTimeScreen from '../pages/datetime';
import SelectTypeScreen from '../pages/selectTypes';

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
      <Stack.Navigator initialRouteName={routes.register}>
        <Stack.Screen name={routes.home} options={optionSplash} component={HomeScreen} />
        <Stack.Screen name={routes.splash} options={optionSplash} component={SplashScreen} />
        <Stack.Screen name={routes.login} options={optionLogin} component={LoginScreen} />
        <Stack.Screen name={routes.register}  options={optionLogin} component={RegisterScreen} />
        <Stack.Screen name={routes.code} options={optionLogin} component={CodeScreen} />
        <Stack.Screen name={routes.drawer} options={optionSplash} component={DrawerHome} />


        <Stack.Screen name={routes.address} options={optionLogin} component={AddressScreen} />
        <Stack.Screen name={routes.dateTime} options={optionLogin} component={DateTimeScreen} />
        <Stack.Screen name={routes.selectType} options={optionLogin} component={SelectTypeScreen} />
      </Stack.Navigator>
    </NavigationContainer>


  );
};



// export const StackAddress = () => {

//   return (

//       <Stack.Navigator initialRouteName={routes.recycle}>
//         <Stack.Screen name={routes.recycle} options={optionSplash} component={RecycleScreen} />
//         <Stack.Screen name={routes.home} options={optionSplash} component={RecycleScreen} />
//       </Stack.Navigator>


//   );
// };



export default StackHome;