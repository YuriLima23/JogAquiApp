import { useNavigation } from '@react-navigation/core'
import React, { useState, useEffect, useContext } from 'react'
import { View, Text, FlatList, ScrollView, TouchableOpacity, KeyboardAvoidingViewBase, ActivityIndicator, Keyboard, Image } from 'react-native'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import Title from '../../components/title/Title'
import { routes } from '../../routes/routes'
import styles from './style'
import { colors } from '../../../globalStyle/colors'
import Icon from 'react-native-vector-icons/Entypo'
import GeneralContext from '../../contexts/generalContext'
import api from '../../api/service'
import endpoints from '../../api/endpoints'
import { exceptions } from '../../utils/Firebase'


const SelectTypeScreen = () => {
     const [arrayTypes, setArrayTypes] = useState([]);
     const [type2, setTime2] = useState(false);
     const [type3, setTime3] = useState(false);
     const [type4, setTime4] = useState(false);





     const navigation = useNavigation()
     const context = useContext(GeneralContext);
     useEffect(() => {
          requestTypes()
     }, []);

     const nextPage = () => {
          navigation.navigate(routes.code)
     }

     const requestTypes = async () => {
          try {
               const response = await api.get(endpoints.requestTypesAvailable)
               setArrayTypes(response.data)
          } catch (error) {
               console.log('error', error)
               context.setWarning([true, exceptions(error), false])
          }
     }
     return (
          <View style={styles.container}>
               <View style={styles.regionTitle}>
                    <Title view={false} >Selecione os tipos de residuos a serem coletados.</Title>
               </View>
               <View style={styles.regionTypesRecycle}>
                    <View style={styles.regionType}>
                         <Image style={styles.imageTrash} source={require("../../../images/trash.png")} />
                         <Text style={styles.label}>Plastico</Text>
                    </View>
                    <View style={styles.regionType}>
                         <Image style={styles.imageTrash} source={require("../../../images/trash.png")} />
                         <Text style={styles.label}>Papelão</Text>
                    </View>
                    <View style={styles.regionType}>
                         <Image style={styles.imageTrash} source={require("../../../images/trash.png")} />
                         <Text style={styles.label}>Plastico</Text>
                    </View>
                    <View style={styles.regionType}>
                         <Image style={styles.imageTrash} source={require("../../../images/trash.png")} />
                         <Text style={styles.label}>Papelão</Text>
                    </View>
                   
               </View>
               <View style={styles.regionButton}>
                    <Button smallButton onPress={() => navigation.navigate(routes.recycle)} title="Cancelar" />
                    <Button smallButton onPress={() => navigation.navigate(routes.recycle)} title="Solicitar" />
               </View>
          </View >
     )
}
export default SelectTypeScreen