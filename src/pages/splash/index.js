import React, { useContext, useEffect, useLayoutEffect } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { colors } from '../../../globalStyle/colors'
import styles from './style'
import * as Cache from "../../cache/storage"
import { useNavigation } from '@react-navigation/core'
import { routes } from '../../routes/routes'
import { storageLabel } from '../../../config/configs'
import GeneralContext from '../../contexts/generalContext'
import api from '../../api/service'
import endpoints from '../../api/endpoints'
import { exceptions } from '../../utils/Firebase'

const SplashScreen = () => {
    const navigation = useNavigation()
    const context = useContext(GeneralContext)

    useLayoutEffect(() => {
        statusLogin()
    }, [])


    const statusLogin = async () => {
        try {
 
            let token = await Cache.getItem(storageLabel.token_user)
         
            if (token) {
                const { status, data } = await api.post(endpoints.checkAuth, {
                    token: token
                })
                if (status && status != 200) {
                    throw "auth/session-expired"
                }
                context.autenticate(data.user)
            }else{
                context.logout()
            }
        } catch (error) {
            console.log(`Error splashs ${error}`)
            context.setWarning([true, exceptions(error, context), false])
            context.logout()
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