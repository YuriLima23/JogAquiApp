import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { View, Text, FlatList, ScrollView, TouchableOpacity, KeyboardAvoidingViewBase, ActivityIndicator, Keyboard, Image } from 'react-native'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import Title from '../../components/title/Title'
import { routes } from '../../routes/routes'
import styles from './style'
import { colors } from '../../../globalStyle/colors'
import Icon from 'react-native-vector-icons/Entypo'


const SelectTypeScreen = () => {
     const [type1, setTime1] = useState(false);
     const [type2, setTime2] = useState(false);
     const [type3, setTime3] = useState(false);
     const [type4, setTime4] = useState(false);



     const navigation = useNavigation()

     const nextPage = () => {
          navigation.navigate(routes.code)
     }

     return (
          <View style={styles.container}>
               <View style={styles.regionTitle}>
                    <Title view={false} >Selecione os tipos de residuos a serem coletados.</Title>
               </View>
               <View style={styles.regionTypesRecycle}>
                    <View style={styles.subRegionTypesRecicle}>
                         <View style={styles.regionType}>
                              <Image style={styles.imageTrash} source={require("../../../images/trash.png")} />
                              <Text style={styles.label}>Plastico</Text>
                         </View>
                         <View style={styles.regionType}>
                              <Image style={styles.imageTrash} source={require("../../../images/trash.png")} />
                              <Text style={styles.label}>Papelão</Text>
                         </View>
                    </View>
                    <View style={styles.subRegionTypesRecicle}>
                         <View style={styles.regionType}>
                              <Image style={styles.imageTrash} source={require("../../../images/trash.png")} />
                              <Text style={styles.label}>Aluminio</Text>
                         </View>
                         <View style={styles.regionType}>
                              <Image style={styles.imageTrash} source={require("../../../images/trash.png")} />
                              <Text style={styles.label}>Vidro</Text>
                         </View>
                    </View>



               </View>
               <View style={styles.regionButton}>
                    <Button smallButton onPress={() => console.log("AAAAAAAA")} title="Cancelar" />
                    <Button smallButton onPress={() => null} title="Solicitar" />
               </View>
          </View >
     )
}
export default SelectTypeScreen