import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { View, Text, ScrollView, ScrollViewBase, Keyboard, KeyboardAvoidingView } from 'react-native'
import Button from '../../components/button/button'
import Input from '../../components/input/Input'
import styles from './style'
import { routes } from '../../routes/routes'
import { PhoneFormatter } from '../../utils/formatter'
import { validationPhone } from '../../utils/validation'
import style from './style'

const LoginScreen = () => {
     const [changeForPassword, setChangeForPassword] = useState(false)
     const [phone, setPhone] = useState("")
     const [password, setPassword] = useState("")

     const [errorPhone, setErrorPhone] = useState(false)
     const [errorPassword, setErrorPassword] = useState(false)

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
               const test = validationPhone(phone)
               if (!test) {
                    setErrorPhone(true)
               } else {
                    nextPage()
               }

          }
          Keyboard.dismiss()

     }
     const handlerDisabledKeyboard = (text) => {
          if (validationPhone(text)) {
               Keyboard.dismiss()
          }
          setPhone(PhoneFormatter(text))
     }

     return (

          <View style={styles.container}>
               <ScrollView contentContainerStyle={style.scroll}>
                    <View style={styles.regionTitle}>
                         <Text style={styles.title}>Entrar</Text>
                    </View>
                    {changeForPassword ?
                         <View style={styles.regionInputs}>
                              <Input onChangeText={(text) => handlerDisabledKeyboard(text)}
                                   value={phone}
                                   error={errorPhone}
                                   maxLength={15}
                                   keyboardType={"phone-pad"}
                                   onFocus={() => setErrorPhone(false)}
                                   onBlur={() => Keyboard.dismiss()}
                                   placeholder="(53) 9 99342007"
                                   messageError="Campo telefone invalido" />
                              <Input placeholder="SENHA" onChangeText={setPassword} value={password} security />
                         </View>
                         :
                         <View style={styles.regionInputs}>
                              <Input
                                   onChangeText={(text) => handlerDisabledKeyboard(text)}
                                   value={phone}
                                   error={errorPhone}
                                   maxLength={15}
                                   keyboardType={"phone-pad"}
                                   onFocus={() => setErrorPhone(false)}
                                   onBlur={() => Keyboard.dismiss()}
                                   placeholder="(53) 9 99342007"
                                   messageError="Campo telefone invalido"
                              />
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