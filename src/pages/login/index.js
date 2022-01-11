import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Input from '../../components/input/Input'
import styles from './style'

const LoginScreen = () => {
     const navigation = useNavigation()


     return (
          <View style={styles.container}>
               <View style={styles.regionTitle}>
                    <Text style={styles.title}>Entrar</Text>
               </View>
               <View style={styles.regionInputs}>
                    <Input style={styles.regionInputs} placeholder="(53) 9 99342007" />
                    <Input placeholder="SENHA" security />
               </View>
               <View style={styles.regionButtons}>

               </View>


          </View>
     )
}
export default LoginScreen