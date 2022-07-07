import React, { useState, useContext, useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { View, Keyboard, ScrollView, Image, Text, TouchableHighlight, PermissionsAndroid } from 'react-native'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import Title from '../../components/title/Title'
import { routes } from '../../routes/routes'
import { formatterOnlyStrings, PhoneFormatter, cpfFormatter } from '../../utils/formatter'
import { validationConfimPassword, validationName, checkValue, checkValidEmail, checkValidCpf, } from '../../utils/validation'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import styles from './style'
import GeneralContext from '../../contexts/generalContext'
import { exceptions, requestCodePhone, signOutUser } from '../../utils/Firebase'
import api from '../../api/service'
import endpoints from '../../api/endpoints'

const ProfileScreen = () => {
     const [email, setEmail] = useState("");
     const [name, setName] = useState("");
     const [cpf, setCpf] = useState("");
     const [photo, setPhoto] = useState("");

     const [nameError, setNameError] = useState([false, ""]);
     const [emailError, setEmailError] = useState([false, ""]);
     const [cpfError, setCpfError] = useState([false, ""]);
     const { setIsLoading, setWarning } = useContext(GeneralContext)
     const navigation = useNavigation()

     useEffect(() => {
          getDataProfile()
     }, [navigation]);

     const getDataProfile = async () => {
          setIsLoading(true)
          try {
               const response = await api.get(endpoints.recoverUser)
               console.log('response', response.data)
               setEmail(response.data.email)
               setCpf(response.data.cpf)
               setPhoto(response.data.photo)
               setName(response.data.name)

          } catch (error) {
               console.log('Error request data profile', error)
               setWarning([true, "Erro recuperar os dados do perfil", false])

          }
          setIsLoading(false)

     }

     const updateProfile = async () => {
          setIsLoading(true)
          try {

               if (checkDataValues()) {
                    const response = await api.post(endpoints.updateUser, {
                         email,
                         cpf,
                         photo,
                         name

                    })
                    if (response.status == 200) {
                         getDataProfile()
                         setWarning([true, `Perfil atualizado com sucesso`, true])
                         setIsLoading(false)
                         
                         return
                    }
               }
               throw "Dados invalidos"
          } catch (error) {
               console.log("Erro update profile", error)
               setWarning([true, `Erro ao atualizar os dados do perfil: ${error}`, false])

          }
          setIsLoading(false)
          

     }

     const requestCameraPermission = async () => {
          try {
               const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                         title: "Permissão",
                         message: "Este aplictivo solicita a permissão para o uso da camera.",
                         buttonNegative: "Recusar",
                         buttonPositive: "Aceitar"
                    }
               );
               if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    return true
               }
          } catch (err) {
               console.warn(err);
          }
          return false
     };
     const enableCamera = async () => {
          try {
               let permission = await requestCameraPermission()
               setIsLoading(true)
               if (permission) {
                    const response = await launchCamera({ includeBase64: true })
                    if (!response.errorMessage) {
                         setPhoto(`data:${response.assets[0].type};base64,${response.assets[0].base64}`)
                    }

               } else {
                    throw "Sem permissão para uso da camera"
               }

          } catch (error) {
               console.log("Error ", error)
               setWarning([true, "Erro ao tentar acessar a camera", false])
          }
          setIsLoading(false)

     }
     const checkDataValues = () => {
          if (emailError[0] || nameError[0] || cpfError[0]) {
               return false
          }
          return true
     }



     return (
          <View style={styles.container}>
               <ScrollView>
                    <View style={styles.regionImageProfile}>
                         <View style={styles.regionImage}>
                              <TouchableHighlight onPress={() => enableCamera()}>
                                   {!checkValue(photo) ? <Image style={styles.imageProfile} source={require("../../../images/profileDefault.png")} /> :
                                        <Image style={styles.imageProfileURI} source={{ uri: photo }} />}
                              </TouchableHighlight>
                         </View>

                         <Text style={styles.nameProfile} view={false}>{name || "Nome do usuario"} </Text>
                    </View>

                    <View style={styles.regionInput}>
                         <Input
                              value={name}
                              error={nameError[0]}
                              onChangeText={(text) => setName(formatterOnlyStrings(text))}
                              onFocus={() => setNameError([false, ""])}
                              onBlur={() => validationName(name, setNameError)}
                              placeholder="Nome completo"
                              messageError={nameError[1]} />


                         <Input
                              value={email}
                              onBlur={() => checkValidEmail(email) || !checkValue(email) ? setEmailError([false, ""]) : setEmailError([true, "Email invalido !"])}
                              onFocus={() => setEmailError([false, ""])}
                              onChangeText={(text) => setEmail(text)}
                              error={emailError[0]}
                              messageError={emailError[1]}
                              placeholder="Preencha seu email"
                         />

                         <Input
                              value={cpf}
                              error={cpfError[0]}
                              messageError={cpfError[1]}
                              onBlur={() => checkValidCpf(cpf) || !checkValue(cpf) ? setCpfError([false, ""]) : setCpfError([true, "Cpf invalido!"])}
                              onFocus={() => setCpfError([false, ""])}
                              maxLength={14}
                              onChangeText={(text) => setCpf(cpfFormatter(text))}
                              placeholder="Preencha seu CPF"
                         />
                    </View>
                    <View style={styles.regionButton}>
                         <Button onPress={() => updateProfile()} title="Atualizar" />
                    </View>
               </ScrollView>
          </View >
     )
}
export default ProfileScreen