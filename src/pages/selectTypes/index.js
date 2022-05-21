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
import CreateSolicitationContext from '../../contexts/createSolicitationContext'


const SelectTypeScreen = () => {
     const [arrayTypes, setArrayTypes] = useState([]);
     const [itemsSelected, setItemsSelected] = useState([]);

     const navigation = useNavigation()
     const context = useContext(GeneralContext);
     const contextSolicitation = useContext(CreateSolicitationContext)
     useEffect(() => {
          requestTypes()
     }, []);


     const nextPage = async () => {
          context.setIsLoading(true)
          try {
               if (itemsSelected.length <= 0) {
                    context.setWarning([true, "Selecione ao menos um tipo", false])
                    return
               }
               console.log("SOLICITATION COMPLETED : ", contextSolicitation.solicitation)
               const response = await api.post(endpoints.makeSolicitation, contextSolicitation.solicitation)
               if (response.status == 200) {
                    navigation.navigate(routes.recycle)
               }
          } catch (error) {
               console.log("Error types selected: ", error)
               context.setWarning([true, exceptions(error), false])
          }
          context.setIsLoading(false)


     }

     const requestTypes = async () => {
          context.setIsLoading(true)
          try {
               const response = await api.get(endpoints.requestTypesAvailable)
               setArrayTypes(response.data)
          } catch (error) {
               console.log('error', error)
               context.setWarning([true, exceptions(error), false])
          }
          context.setIsLoading(false)

     }

     const selectItem = (id) => {
          let array = [...itemsSelected]
          let exists = array.indexOf(id)
          if (exists > -1) {
               array.splice(exists, 1)
          } else {
               array.push(id)
          }
          contextSolicitation.setSolicitation({ ...contextSolicitation.solicitation, type_recicle: array })
          setItemsSelected(array)
     }

     const isChecked = (id) => {
          let exists = itemsSelected.indexOf(id)
          if (exists > -1) {
               return true
          }
          return false
     }

     return (
          <View style={styles.container}>
               <View style={styles.regionTitle}>
                    <Title view={false} >Selecione os tipos de residuos a serem coletados.</Title>
               </View>
               <View style={styles.regionTypesRecycle}>
                    {
                         arrayTypes.map((type) => (
                              <TouchableOpacity key={type.id} onPress={() => selectItem(type.id)}  >
                                   <View style={!isChecked(type.id) ? styles.regionType : { ...styles.regionType, backgroundColor: type.color }}>
                                        <Image style={styles.imageTrash} source={require("../../../images/trash.png")} />
                                        <Text style={styles.label}>{type.name}</Text>
                                   </View>
                              </TouchableOpacity>
                         ))

                    }
               </View>
               <View style={styles.regionButton}>
                    <Button smallButton onPress={() => navigation.navigate(routes.recycle)} title="Cancelar" />
                    <Button smallButton onPress={() => nextPage()} title="Solicitar" />
               </View>
          </View >
     )
}
export default SelectTypeScreen