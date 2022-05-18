import React, { useState, useContext, useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { View, Keyboard, ScrollView } from 'react-native'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import Title from '../../components/title/Title'
import { routes } from '../../routes/routes'
import { formatterOnlyStrings, PhoneFormatter } from '../../utils/formatter'
import { validationConfimPassword, validationName, validationPassword, validationPhone } from '../../utils/validation'

import styles from './style'
import GeneralContext from '../../contexts/generalContext'
import { exceptions, requestCodePhone, signOutUser } from '../../utils/Firebase'
import api from '../../api/service'

const RegisterScreen = () => {
     const [phone, setPhone] = useState("");
     const [name, setName] = useState("");
     const [password, setPassword] = useState("");
     const [confirmPassword, setConfirmPassword] = useState("");

     const [phoneError, setPhoneError] = useState([false, ""]);
     const [nameError, setNameError] = useState([false, ""]);
     const [passwordError, setPasswordError] = useState([false, ""]);
     const [confirmPasswordError, setConfirmPasswordError] = useState([false, ""]);
     const { setIsLoading, setWarning } = useContext(GeneralContext)
     const navigation = useNavigation()

     useEffect(() => {
          signOutUser()
     }, []);

     const handlerDisabledKeyboard = (text) => {
          setPhone(PhoneFormatter(text))
     }
     const nextPage = (params) => {
          navigation.navigate(routes.code, params)
     }
     const validateForm = async () => {
          setIsLoading(true)
          let isValid = validationFields()
          if (isValid) {
               await sendForm()
          }
          Keyboard.dismiss()
          setIsLoading(false)


     }

     const sendForm = async () => {
          try {
               let phoneDDI = "+55 " + phone
               let user = { phone: phoneDDI, name, password }

               const response = await api.post("/cache/users", user)

               if (response.status == 200) {
                    let res  = await requestCodePhone(phoneDDI)
                    if (!res) {
                         console.log("entrou no error");
                         throw "auth/send-code-register"
                    }
                    nextPage({ phoneDDI, confirmCode: res })

               }
          } catch (error) {
               console.log("Error :" , error)
               setWarning([true, exceptions(error, context), false])
               return false 
          }
       

     }



     const validationFields = () => {
          if (!phoneError[0] && !nameError[0] && !passwordError[0] && !confirmPasswordError[0]) {
               if (name != "" && phone != "" && password != "" && confirmPassword != "" && (confirmPassword == password))
                    return true
          }
          setWarning([true, "Ops! campos invalidos.", false])
          return false
     }

     return (
          <View style={styles.container}>
               <ScrollView contentContainerStyle={styles.scroll} >

                    <Title view={true}>Cadastrar-se</Title>

                    <View style={styles.regionInput}>
                         <Input
                              value={name}
                              error={nameError[0]}
                              onChangeText={(text) => setName(formatterOnlyStrings(text))}
                              onFocus={() => setNameError([false, ""])}
                              onBlur={() => validationName(name, setNameError)}
                              placeholder="NOME COMPLETO"
                              messageError={nameError[1]} />

                         <Input
                              onChangeText={(text) => handlerDisabledKeyboard(text)}
                              value={phone}
                              error={phoneError[0]}
                              maxLength={15}
                              keyboardType={"phone-pad"}
                              onFocus={() => setPhoneError([false, ""])}
                              onBlur={() => validationPhone(phone, setPhoneError)}
                              placeholder="(53)9 99342007"
                              messageError={phoneError[1]} />

                         <Input
                              value={password}
                              onChangeText={setPassword}
                              error={passwordError[0]}
                              onFocus={() => setPasswordError([false, ""])}
                              placeholder="SENHA"
                              onBlur={() => validationPassword(password, setPasswordError)}
                              security
                              messageError={passwordError[1]} />

                         <Input
                              value={confirmPassword}
                              error={confirmPasswordError[0]}
                              onChangeText={setConfirmPassword}
                              placeholder="CONFIRMAR SENHA"
                              onFocus={() => setConfirmPasswordError([false, ""])}
                              onBlur={() => validationConfimPassword(confirmPassword, password, setConfirmPasswordError)}
                              security
                              messageError={confirmPasswordError[1]} />
                    </View>
                    <View style={styles.regionButton}>
                         <Button onPress={validateForm} title="Proximo" />
                    </View>
               </ScrollView >
          </View >
     )
}
export default RegisterScreen