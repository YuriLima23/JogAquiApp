import React, { useState, useContext, useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { View, TextInput, } from 'react-native'
import { Picker } from '@react-native-picker/picker';

import styles from './style'
import GeneralContext from '../../contexts/generalContext'
import Button from '../../components/button/Button';
import { checkValue } from '../../utils/validation';
import api from '../../api/service';
import endpoints from '../../api/endpoints';
import { exceptions } from '../../utils/Firebase';


const SupportScreen = () => {
     const [subject, setSubject] = useState("");
     const [description, setDescription] = useState("");
     const context = useContext(GeneralContext)
     const navigation = useNavigation()
     const options = ["Duvida", "Sugestão", "Crítica"]

     const validateForm = async () => {
          context.setIsLoading(true)
          try {
               if(!checkValue(subject) || !checkValue(description) ){
                    throw "support/invalid-data"
               }
               const response = await api.post(endpoints.sendReport,{
                    subject,
                    description
               })

               if(response.status != 200){
                    throw "support/error-send_data"
               }
               cleanInputs()
               context.setWarning([true, "Mensagem enviada com sucesso, aguarde  a resposta via email", true])

          } catch (error) {
               console.log('error support', error)
               context.setWarning([true, exceptions(error), false])

          }
          context.setIsLoading(false)
     }

     const cleanInputs = () =>{
          setDescription("")
          setSubject("")
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
                    <TextInput onChangeText={setDescription} multiline value={description} numberOfLines={5} style={styles.description}></TextInput>
               </View>
               <View style={styles.regionBtn}>
                    <Button onPress={validateForm} title="Enviar" />
               </View>
          </View >
     )
}
export default SupportScreen