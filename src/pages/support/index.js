import React, { useState, useContext, useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { View, TextInput, } from 'react-native'
import { Picker } from '@react-native-picker/picker';

import styles from './style'
import GeneralContext from '../../contexts/generalContext'
import Button from '../../components/button/Button';


const SupportScreen = () => {
     const [subject, setSubject] = useState("");
     const [description, setDescription] = useState("");
     const { setIsLoading, setWarning } = useContext(GeneralContext)
     const navigation = useNavigation()
     const options = ["Duvida", "Sugestão", "Crítica"]

     const validateForm = async () => {
          setIsLoading(true)
          try {

          } catch (error) {
               console.log('error support', error)
          }
          setIsLoading(false)
     }

     return (
          <View style={styles.container}>
               <View style={styles.regionPicker}>
                    <Picker
                         selectedValue={subject}
                         style={styles.picker}
                         onValueChange={(itemValue, itemIndex) =>
                              setSubject(itemValue)
                         }>
                         <Picker.Item label="Selecione" value={null} />
                         {
                              options.map((item) => (
                                   <Picker.Item key={item} label={item} value={item} />
                              ))
                         }


                    </Picker>
               </View>
               <View style={styles.regionDescription}>
                    <TextInput onChangeText={setDescription} value={description} numberOfLines={5} style={styles.description}></TextInput>
               </View>
               <View style={styles.regionBtn}>
                    <Button onPress={validateForm} title="Enviar" />
               </View>
          </View >
     )
}
export default SupportScreen