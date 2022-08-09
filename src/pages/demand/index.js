import React, { useContext, useLayoutEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, FlatList, AppRegistry } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import styles from './style'
import { routes } from '../../routes/routes'
import Loading from '../../components/loading/Loading'
import Warning from '../../components/warning/Warning'
import Title from '../../components/title/Title'
import { metrics } from '../../../globalStyle/metrics'
import Header from '../../components/header/Header'
import Forms from '../../components/forms/Forms'
import GeneralContext from '../../contexts/generalContext'
import { exceptions } from '../../utils/Firebase'
import api from '../../api/service'
import endpoints from '../../api/endpoints'
import { formatDate, formatHour } from '../../utils/formatter'


const DemandScreen = () => {

     const navigation = useNavigation();
     const context = useContext(GeneralContext)
     const [demands, setDemands] = useState([]);

     useLayoutEffect(() => {
          navigation.setOptions({ title: "Pedidos" })
          getDemand()
     }, [navigation]);

     const redirect = (route, params) => {
          navigation.navigate(route, params)
     }

     const getDemand = async () =>{
          context.setIsLoading(true)
          try {
               const {status, data}  = await api.get(endpoints.demands)
               if(status == 200 ){
                    console.log('data', data)
                    setDemands(data)
               }
               
          } catch (error) {
               console.log('Error Demand : ', error)
               context.setWarning([true, exceptions(error, context), false])
          }
          context.setIsLoading(false)

     }

     const Item = ({ item }) => {


          return (
               <View key={item.id} style={styles.containerItem}>
                    <View style={styles.regionItem}>
                         <Text style={styles.hourItem}>{formatHour(item.date_of_collect)}</Text>
                         <Text style={styles.statusItem}>{item.status}</Text>
                    </View>
                    <View style={styles.regionItem}>
                       
                         <View style={styles.regionImages}>
                              <Image source={require("../../../images/Recicle.png")} style={styles.imageItem} />
                              <Image source={require("../../../images/Recicle.png")} style={styles.imageItem} />
                              <Image source={require("../../../images/Recicle.png")} style={styles.imageItem} />
                              <Image source={require("../../../images/Recicle.png")} style={styles.imageItem} />
                         </View>
                         <Text style={styles.dateItem}>{formatDate(item.date_of_collect)}</Text>
                    </View>
                    {/* <Forms /> */}
               </View>

          )
     }

     return (
          <View style={styles.container}>
               {demands.length > 0 ? <FlatList data={demands} renderItem={(props) => <Item {...props}/>}  /> : 
               
               <Text style={styles.textNothing}>Ops ! parece que você ainda não reciclou.</Text>
               }
               
          </View>
     )
}
export default DemandScreen