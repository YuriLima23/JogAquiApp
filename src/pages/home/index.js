import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import styles from './style'
import { routes } from '../../routes/routes'
import Loading from '../../components/loading/Loading'
import Warning from '../../components/warning/Warning'

const HomeScreen = () => {

     const navigation = useNavigation();

     const redirect = (route, params) => {
          navigation.navigate(route, params)
     }

     return (
          <View style={styles.container}>
               <View style={styles.sectionBtn}>
                    <TouchableOpacity onPress={() => redirect(routes.register, null)} style={styles.btn}>
                         <Text style={styles.btnText}>Registrar</Text>
                    </TouchableOpacity>
               </View>
               <View style={styles.sectionBtn}>
                    <TouchableOpacity
                         onPress={() => redirect(routes.login, null)}
                         style={styles.btn}>
                         <Text style={styles.btnText}>Entrar</Text>
                    </TouchableOpacity>
               </View>
               {/* <Loading show={false} /> */}
               <Warning/>
          </View>
     )
}
export default HomeScreen