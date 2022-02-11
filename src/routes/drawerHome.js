/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { View, Text, Image } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { routes } from './routes';


import WelcomeScreen from '../pages/welcome';
import DemandScreen from '../pages/demand';
import Header from '../components/header/Header';
import styles from "./style"
import RecycleScreen from '../pages/recycle';
import { StackAddress } from './stackHome';

const Drawer = createDrawerNavigator();

const optionsWelcome = {
    headerShown: false,
    swipeEnabled: false
}

const CustomDrawer = (props) => {
    return (

        <DrawerContentScrollView style={{}} {...props}>
            <View style={styles.regionName}>
                <Text style={styles.name}>Yuri Ramos Lima</Text>
                <Text style={styles.document}>037.598.040.71</Text>
                <Text style={styles.money}>R$ 10,00</Text>
            </View>
            <View style={styles.regionMenu}>
                <DrawerItemList {...props} />
            </View>
        </DrawerContentScrollView>

    )
}

const DrawerHome = () => {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props}></CustomDrawer>} initialRouteName={routes.recycle}>
            <Drawer.Screen name={routes.welcome} options={{title:"Menu", ...optionsWelcome }} component={WelcomeScreen} />
            <Drawer.Screen name={routes.demand} options={{ title:"Pedidos", header: (props) => <Header {...props}></Header> }} component={DemandScreen} />
            <Drawer.Screen name={routes.recycle} options={{ title:"Reciclar" , header: (props) => <Header {...props}></Header> }} component={RecycleScreen} />
        </Drawer.Navigator>
    );
};



export default DrawerHome;