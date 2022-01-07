import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Input from '../../components/input/Input'
import styles from './style'

const LoginScreen = () => {
     const navigation = useNavigation()


     return (
          <View style={styles.container}>
               <View>
                    <Input placeholder="CPF" />
               </View>
               <View>
                    <Input placeholder="SENHA" security/>
               </View>
          </View>
     )
}
export default LoginScreen