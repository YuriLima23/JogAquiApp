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
import { createDrawerNavigator } from '@react-navigation/drawer';
import { routes } from './routes';
import { colors } from '../../globalStyle/colors';

import WelcomeScreen from '../pages/welcome';

const Drawer = createDrawerNavigator();

const optionSplash = {
    headerShown: false
}

const DrawerHome = () => {

    return (
            <Drawer.Navigator initialRouteName={routes.welcome}>
                <Drawer.Screen name={routes.welcome} component={WelcomeScreen} />
            </Drawer.Navigator>
    );
};



export default DrawerHome;