import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { View, Text, FlatList, ScrollView, KeyboardAvoidingView, KeyboardAvoidingViewBase, ActivityIndicator } from 'react-native'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import Title from '../../components/title/Title'
import { routes } from '../../routes/routes'
import styles from './style'
import { colors } from '../../../globalStyle/colors'
import EntytoIcon from 'react-native-vector-icons/Entypo'

const AddressScreen = () => {
     const [address, setAddress] = useState("");
     const [number, setNumber] = useState("");
     const [complement, setComplement] = useState("");

     const [dataAddress, setDataAddress] = useState([]);



     const [addressError, setAddressError] = useState([false, ""]);
     const [numberError, setNumberError] = useState([false, ""]);
     const [complementError, setComplementError] = useState([false, ""]);

     const navigation = useNavigation()

     const nextPage = () => {
          navigation.navigate(routes.code)
     }
     const AddressItem = ({ item }) => {
          return (<View key={item} style={styles.itemFlatList}>
               <EntytoIcon name="location-pin" size={25} color={colors.dark} />
               <Text style={{ color: colors.dark }}>{item}</Text>
          </View>

          )
     }

     const focusAddress = () => {

          setAddressError([false, ""])
     }
     return (
          <View style={styles.container}>
               <ScrollView contentContainerStyle={styles.scroll} >
                    <View style={styles.regionInput}>
                         <Text style={styles.title}>Qual é seu endereço ?</Text>
                         <View style={styles.regionFlatList}>
                              <Input
                                   onChangeText={(text) => setAddress(text)}
                                   value={address}
                                   error={addressError[0]}
                                   onFocus={() => focusAddress()}
                                   placeholder="ex : Rua general osorio"
                                   messageError={addressError[1]} />

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
               </ScrollView>
          </View >
     )
}
export default AddressScreen