import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { View, Text, ScrollView, ScrollViewBase, Keyboard, KeyboardAvoidingView } from 'react-native'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import styles from './style'
import { routes } from '../../routes/routes'
import { PhoneFormatter } from '../../utils/formatter'
import { validationPhone } from '../../utils/validation'
import Title from '../../components/title/Title'


const LoginScreen = () => {
     const [changeForPassword, setChangeForPassword] = useState(false)
     const [phone, setPhone] = useState("")
     const [password, setPassword] = useState("")

     const [phoneError, setPhoneError] = useState([false, ""])
     const [passwordError, setPasswordError] = useState([false,""])

     const navigation = useNavigation()

     useEffect(() => {

     }, [])
     const handleChangePassword = () => {
          setChangeForPassword(!changeForPassword)
     }
     const nextPage = () => {
          navigation.navigate(routes.code)
     }
     const validateForm = () => {

          if (!changeForPassword) {
               const test = validationPhone(phone, setPhoneError)
               if (test) {
                    nextPage()
               } 

          }
          Keyboard.dismiss()

     }
     const handlerDisabledKeyboard = (text) => {
          text = text.replace(/\D/g, "")
          if (text.length == 11) {
               Keyboard.dismiss()
          }
          setPhone(PhoneFormatter(text))
     }

     return (

          <View style={styles.container}>
               <ScrollView contentContainerStyle={styles.scroll}>
                    
                         <Title>Entrar</Title>
               
                    {changeForPassword ?
                         <View style={styles.regionInputs}>
                              <Input onChangeText={(text) => handlerDisabledKeyboard(text)}
                                   value={phone}
                                   error={phoneError[0]}
                                   maxLength={15}
                                   keyboardType={"phone-pad"}
                                   onFocus={() => setPhoneError(false)}
                                   onBlur={() => validationPhone(phone, setPhoneError)}
                                   placeholder="(53) 9 99342007"
                                   messageError={phoneError[1]} />
                              <Input
                                   placeholder="SENHA"
                                   onChangeText={setPassword}
                                   value={password}
                                   error={passwordError[0]}
                                   messageError={passwordError[1]}
                                   security />
                         </View>
                         :
                         <View style={styles.regionInputs}>
                              <Input
                                   onChangeText={(text) => handlerDisabledKeyboard(text)}
                                   value={phone}
                                   error={phoneError[0]}
                                   maxLength={15}
                                   keyboardType={"phone-pad"}
                                   onFocus={() => setPhoneError([false,""])}
                                   onBlur={() => validationPhone(phone, setPhoneError)}
                                   placeholder="(53) 9 99342007"
                                   messageError={phoneError[1]} />
                         
                         </View>
                    }
                    <View style={styles.regionButtons}>
                         <Button onPress={() => validateForm()} title={changeForPassword ? "Entrar" : "Proximo"}></Button>
                         <Button onPress={handleChangePassword} title={changeForPassword ? "Acessar com codigo" : "Acessar com senha"}></Button>
                    </View>
               </ScrollView>
          </View>

     )
}
export default LoginScreen