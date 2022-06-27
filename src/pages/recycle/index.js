import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, PermissionsAndroid, ScrollView, KeyboardAvoidingView, KeyboardAvoidingViewBase, Image } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

import styles from './style'
import { metrics } from '../../../globalStyle/metrics';
import { colors } from '../../../globalStyle/colors';
import Feather from "react-native-vector-icons/Feather"
import { routes } from '../../routes/routes';
import api from '../../api/service';
import endpoints from '../../api/endpoints';
import { formatDate, formateStringDateAndTime } from '../../utils/formatter';

const RecycleScreen = () => {
     const navigation = useNavigation()
     const [location, setLocation] = useState({ latitude: -23.5639552, longitude: -46.6559679 })
     const [requestAddresses, setRequestAddresses] = useState([])
     useEffect(() => {
          const unsubscribe = navigation.addListener('focus', () => {
               requestPermissionLocation()
               getRequestsSolicitations()
          });
          return unsubscribe;

     }, [navigation])

     const getLocation = () => {
          try {
               Geolocation.getCurrentPosition(
                    (position) => {
                         console.log(position);
                         setLocation(position.coords)
                    },
                    (error) => {
                         // See error code charts below.
                         console.log(error.code, error.message);
                    },
                    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
               );
          } catch (error) {
               console.log("Erro ao recuperar sua localização:", error)
          }

     }

     const requestPermissionLocation = async () => {
          try {
               const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                         title: "Permissão",
                         message:
                              "O aplicativo solicita permissão para conhecer sua localização",
                         buttonNeutral: "Perguntar mais tarde",
                         buttonNegative: "Não permitir",
                         buttonPositive: "Permitir"
                    }
               );
               if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    getLocation()
               } else {
                    console.log("Camera permission denied");
               }
          } catch (err) {
               console.warn(err);
          }
     }

     const getRequestsSolicitations = async () => {
          try {
               console.log('Atualizou mapa')
               const response = await api.get(endpoints.requestAddresses)
               setRequestAddresses(response.data)
          } catch (error) {
               console.log('Error maps', error)
          }
     }

     return (
          <View style={styles.container}>
               <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    loadingEnabled={true}
                    loadingIndicatorColor="red"
                    loadingBackgroundColor="#eeeeee"
                    region={{
                         latitude: location.latitude,
                         longitude: location.longitude,
                         latitudeDelta: 0.015,
                         longitudeDelta: 0.0121,
                    }}
               >
                    {
                         requestAddresses.map((item) => (
                              <Marker key={item.id} coordinate={{
                                   latitude: item.latitude,
                                   longitude: item.longitude,
                                   latitudeDelta: 0.015,
                                   longitudeDelta: 0.0121,
                              }} title={item.status} description={`Dia : ${formateStringDateAndTime(item.date_of_collect).date} as ${formateStringDateAndTime(item.date_of_collect).time}:  `} />
                         ))
                    }


               </MapView>
               <TouchableOpacity onPress={() => navigation.navigate(routes.address)} style={styles.buttonCreateRecicle}>
                    <Image source={require("../../../images/Recicle.png")} style={styles.imageButtonRecicle} />
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate(routes.address)} style={styles.buttonCreateRecicle}>
                    <Feather name="home" onPress={() => navigation.navigate(routes.welcome)} size={40} style={styles.iconRight} color={colors.dark}></Feather>
               </TouchableOpacity>
          </View >
     )
}
export default RecycleScreen