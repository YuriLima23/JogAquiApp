import React, { useState, useEffect, useContext } from 'react'
import { useNavigation } from '@react-navigation/core'
import { View, Text, ScrollView, ScrollViewBase, Keyboard, KeyboardAvoidingView } from 'react-native'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import styles from './style'
import { routes } from '../../routes/routes'
import { PhoneFormatter } from '../../utils/formatter'
import { validationPhone } from '../../utils/validation'
import Title from '../../components/title/Title'
import api from '../../api/service'
import endpoints from '../../api/endpoints'
import GeneralContext from '../../contexts/generalContext'
import { checkPhoneFirebase, exceptions, logoutAuthFirebase, requestCodePhone } from '../../utils/Firebase'
import { setItem } from '../../cache/storage'
import { storageLabel } from '../../../config/configs'


const LoginScreen = () => {
     const [changeForPassword, setChangeForPassword] = useState(false)
     const [phone, setPhone] = useState("")
     const [password, setPassword] = useState("")

     const [phoneError, setPhoneError] = useState([false, ""])
     const [passwordError, setPasswordError] = useState([false, ""])

     const navigation = useNavigation()
     const context = useContext(GeneralContext);

     useEffect(() => {
          
     }, [])
     const handleChangePassword = () => {
          setChangeForPassword(!changeForPassword)
     }

     const validateForm = async () => {
          context.setIsLoading(true)
          await logoutAuthFirebase()
          try {

               const test = validationPhone(phone, setPhoneError)

               if (test) {
                    if (changeForPassword) {
                         const { status, data } = await api.post(endpoints.login, {
                              password,
                              phone: "55" + phone
                         })

                         if (status == 200) {
                              setItem(storageLabel.token_user, data.token_auth)
                              context.autenticate(data)
                         }
                    } else {
                         const phoneDDI = `55${phone}`
                         const confirmCode = await requestCodePhone(phoneDDI)
                         
                         if(!confirmCode){
                              context.setWarning([true, exceptions('auth/invalid-login-server', context), false])
                              return
                         }
                         navigation.navigate(routes.code, { confirmCode:confirmCode , phoneDDI:phoneDDI , auth:true })

                    }

               }
          } catch (error) {
               console.log(`Erro login : ${error}`)
               context.setWarning([true, exceptions(error, context), false])
          }

          Keyboard.dismiss()
          context.setIsLoading(false)

     }
     const handlerDisabledKeyboard = (text) => {
          text = text.replace(/\D/g, "")
          if (text.length == 11) {
               Keyboard.dismiss()
          }
          setPhone(PhoneFormatter(text))
     }
     const validateFields = () => {
          if (!password || passwordError || !phone || phoneError) {
               return false
          }
          return true
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
                                   onFocus={() => setPhoneError([false, ""])}
                                   onBlur={() => validationPhone(phone, setPhoneError)}
                                   placeholder="(53) 9 99342007"
                                   messageError={phoneError[1]} />

                         </View>
                    }
                    <View style={styles.regionButtons}>
                         <Button onPress={validateForm} title={changeForPassword ? "Entrar" : "Proximo"}></Button>
                         <Button onPress={handleChangePassword} title={changeForPassword ? "Acessar com codigo" : "Acessar com senha"}></Button>
                    </View>
               </ScrollView>
          </View>

     )
}
export default LoginScreen