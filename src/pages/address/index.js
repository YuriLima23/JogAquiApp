import React, { useState, useEffect, useContext } from 'react'
import { useNavigation } from '@react-navigation/core'
import { View, Text, FlatList, KeyboardAvoidingViewBase, ActivityIndicator, TouchableHighlight, Keyboard, TouchableOpacity } from 'react-native'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import Title from '../../components/title/Title'
import { routes } from '../../routes/routes'
import styles from './style'
import { colors } from '../../../globalStyle/colors'
import EntytoIcon from 'react-native-vector-icons/Entypo'
import GeneralContext from '../../contexts/generalContext'
import api from '../../api/service'
import endpoints from '../../api/endpoints'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TextInput } from 'react-native-gesture-handler'
import style from '../home/style'

const AddressScreen = () => {
     const [address, setAddress] = useState("");
     const [addressSelected, setAddressSelected] = useState(["", null]);
     const [number, setNumber] = useState("");
     const [complement, setComplement] = useState("");
     const [disabledAddress, setDisabledAddress] = useState(false);

     const [dataAddress, setDataAddress] = useState([]);

     const [numberError, setNumberError] = useState([false, ""]);
     const [complementError, setComplementError] = useState([false, ""]);
     const [loadingAddress, setLoadingAddress] = useState(false);

     const navigation = useNavigation()
     const context = useContext(GeneralContext);

    
     const nextPage = () => {
          navigation.navigate(routes.code)
     }
     const AddressItem = ({ item }) => {
          const selectItem = () => {
               setDataAddress([])
               setAddressSelected([item.address, item.place_id])
          }
          return (
               <TouchableOpacity onPress={selectItem}>
                    <View key={item.place_id} style={styles.itemFlatList}>
                         <EntytoIcon name="location-pin" size={25} color={colors.dark} />
                         <Text style={{ color: colors.dark }}>{item.address}</Text>
                    </View>
               </TouchableOpacity>


          )
     }

     const findAddresses = async () => {
          setLoadingAddress(true)
          Keyboard.dismiss()
          try {
               const response = await api.post(endpoints.findAddresses, {
                    address: addressSelected[0]
               })
               if(response.data.length <= 0){
                    context.setWarning([true, "Endereço não encontrado", false])
               }
               setDataAddress(response.data || [])
          } catch (error) {
               console.log('error', error)

          }

          setLoadingAddress(false)
     }

     const resetAddressess = (text) =>{
          if(dataAddress.length > 0){
               setDataAddress([])
          }

          setAddressSelected([text, null])
     }


     return (
          <View style={styles.container}>
               {/* <ScrollView  contentContainerStyle={styles.scroll} > */}
               <View style={styles.regionInput}>
                    <Text style={styles.title}>Qual é seu endereço ?</Text>
                    <View style={styles.regionFlatList}>
                         <View style={styles.containerInputFindAddress}>
                              <TextInput
                                   onChangeText={resetAddressess}
                                   value={addressSelected[0]}
                                   placeholderTextColor={colors.placeholders}
                                   style={styles.textAddress}
                                   placeholder="ex : Rua general osorio"
                              >

                              </TextInput>

                              {
                                   addressSelected[1] ?
                                        <Ionicons onPress={() => resetAddressess("")} name='close' style={styles.iconFindAddress} size={40} />
                                        :
                                        !loadingAddress ?
                                             <Ionicons onPress={findAddresses} name='search-outline' style={styles.iconFindAddress} size={40} />
                                             :
                                             <ActivityIndicator size={40} color={colors.dark} />



                              }

                         </View>


                         {dataAddress.length > 0 && <FlatList style={styles.flatList} data={dataAddress} renderItem={AddressItem} />}
                    </View>
                    <Input
                         onChangeText={(text) => setNumber(text)}
                         value={number}
                         error={numberError[0]}
                         keyboardType={"phone-pad"}
                         onFocus={() => setNumberError([false, ""])}
                         placeholder="numero"
                         messageError={numberError[1]} />

                    <Input
                         onChangeText={(text) => handlerDisabledKeyboard(text)}
                         value={complement}
                         error={complementError[0]}
                         keyboardType={"phone-pad"}
                         onFocus={() => setComplementError([false, ""])}
                         placeholder="apartamento  123"
                         messageError={complementError[1]} />
                    <View style={styles.regionButton}>
                         <Button onPress={() => navigation.navigate(routes.dateTime)} title="Proximo" />
                    </View>
               </View>
               {/* </ScrollView> */}
          </View >
     )
}
export default AddressScreen