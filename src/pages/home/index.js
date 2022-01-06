import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './style'

const HomeScreen = () => {

     return (
          <View style={styles.container}>
               <View style={styles.sectionBtn}>
                    <TouchableOpacity style={styles.btn}>
                         <Text style={styles.btnText}>Registrar</Text>
                    </TouchableOpacity>
               </View>
               <View style={styles.sectionBtn}>
                    <TouchableOpacity style={styles.btn}>
                         <Text style={styles.btnText}>Entrar</Text>
                    </TouchableOpacity>
               </View>

          </View>
     )
}
export default HomeScreen