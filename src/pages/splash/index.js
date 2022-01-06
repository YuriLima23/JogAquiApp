import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { colors } from '../../../globalStyle/colors'
import styles from './style'
import * as Cache from "../../cache/storage"
import { useNavigation } from '@react-navigation/core'
import { routes } from '../../routes/routes'

const SplashScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        statusLogin()

    }, [])

    const statusLogin = async () => {
        try {
            const result = await Cache.getItem("token")
            if (!result) {
                navigation.navigate(routes.home)
            }else{
                navigation.navigate(routes.home)
            }
        } catch (error) {
            console.log("Erro status login ", error)
        }


    }

    return (
        <View style={styles.container}>
            <ActivityIndicator size={40} color={colors.dark} />
            <Text style={styles.textLoading}>Carregando suas informações</Text>
        </View>
    )
}
export default SplashScreen