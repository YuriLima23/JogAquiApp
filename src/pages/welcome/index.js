import React, { useLayoutEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import styles from './style'
import { routes } from '../../routes/routes'
import Loading from '../../components/loading/Loading'
import Warning from '../../components/warning/Warning'
import Title from '../../components/title/Title'

const WelcomeScreen = () => {

     const navigation = useNavigation();

     const redirect = (route, params) => {
          navigation.navigate(route, params)
     }

     return (
          <View style={styles.container}>
               <View style={styles.regiontTitle}>
                    <Title view={false}>O que deseja fazer ?</Title>
               </View>
               <View style={styles.regionCards}>
                    <View style={styles.regionCardsFirst}>
                         <TouchableOpacity onPress={() => redirect(routes.recycle)} style={styles.regionButton}>
                              <Text style={styles.centerTitle}>Reciclar</Text>
                         </TouchableOpacity>
                         <TouchableOpacity onPress={() => redirect(routes.demand)} style={styles.regionButton}>
                              <Text style={styles.centerTitle}>Pedidos</Text>
                         </TouchableOpacity>
                    </View>

                    <View style={styles.regionCardsSecond}>
                         <TouchableOpacity onPress={() => redirect(routes.demand)} style={styles.regionButton}>
                              <Text style={styles.centerTitle}>Carteira</Text>
                         </TouchableOpacity>
                         <TouchableOpacity style={styles.regionButton}>
                              <Text style={styles.centerTitle}>Sair</Text>
                         </TouchableOpacity>

                    </View>

               </View>

          </View>
     )
}
export default WelcomeScreen