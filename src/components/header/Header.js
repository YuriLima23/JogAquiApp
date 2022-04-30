import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import styles from './style'
import { getHeaderTitle } from '@react-navigation/elements';
import Feather from "react-native-vector-icons/Feather"
import { colors } from '../../../globalStyle/colors';
import { routes } from '../../routes/routes';

const Header = ({navigation, route, options , back}) => {
    const title = getHeaderTitle(options, route.name);

    return (
        <View style={styles.container}>
            <Image source={require("../../../images/Recicle.png")} style={styles.imageLeft} />
            <Text style={styles.title}>{title}</Text>
            <Feather name="menu" onPress={() => navigation.navigate(routes.welcome)} size={40} style={styles.iconRight} color={colors.dark}></Feather>
        </View>
        )
}
export default Header