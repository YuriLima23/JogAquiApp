import React, { useLayoutEffect } from 'react'
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

const array = [
     { id: 1, hora: "10:20", data: "26/01/2022", tipo: "ferro", status: "Coletando" },
     { id: 2, hora: "10:20", data: "26/01/2022", tipo: "ferro", status: "Coletando" },
     { id: 3, hora: "10:20", data: "26/01/2022", tipo: "ferro", status: "Coletando" },
     { id: 4, hora: "10:20", data: "26/01/2022", tipo: "ferro", status: "Coletando" },
     { id: 5, hora: "10:20", data: "26/01/2022", tipo: "ferro", status: "Coletando" },
     { id: 6, hora: "10:20", data: "26/01/2022", tipo: "ferro", status: "Coletando" },
     { id: 7, hora: "10:20", data: "26/01/2022", tipo: "ferro", status: "Coletando" },
     { id: 8, hora: "10:20", data: "26/01/2022", tipo: "ferro", status: "Coletando" },

]
const DemandScreen = () => {

     const navigation = useNavigation();
     useLayoutEffect(() => {
          navigation.setOptions({ title: "Pedidos" })
     }, []);

     const redirect = (route, params) => {
          navigation.navigate(route, params)
     }

     const Item = ({ item }) => {
          return (
               <View key={item.id} style={styles.containerItem}>
                    <View style={styles.regionItem}>
                         <Text style={styles.hourItem}>{item.hora}</Text>
                         <Text style={styles.statusItem}>{item.status}</Text>
                    </View>
                    <View style={styles.regionItem}>
                       
                         <View style={styles.regionImages}>
                              <Image source={require("../../../images/Recicle.png")} style={styles.imageItem} />
                              <Image source={require("../../../images/Recicle.png")} style={styles.imageItem} />
                              <Image source={require("../../../images/Recicle.png")} style={styles.imageItem} />
                              <Image source={require("../../../images/Recicle.png")} style={styles.imageItem} />
                         </View>
                         <Text style={styles.dateItem}>{item.data}</Text>
                    </View>
                    {/* <Forms /> */}
               </View>

          )
     }

     return (
          <View style={styles.container}>
               <FlatList data={array} renderItem={(props) => <Item {...props}/>}  ></FlatList>
          </View>
     )
}
export default DemandScreen