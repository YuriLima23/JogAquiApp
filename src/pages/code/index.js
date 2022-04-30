import React, { useState, useEffect, useRef, useContext } from 'react'
import { useNavigation, useRoute } from '@react-navigation/core'
import { View, TextInput } from 'react-native'
import styles from "./style"

import Button from '../../components/button/Button'
import Title from '../../components/title/Title'
import GeneralContext from '../../contexts/generalContext'
import api from '../../api/service'
import { exceptions, listenerAuth, requestCodePhone } from '../../utils/Firebase'

import { routes } from '../../routes/routes'
import { setItem } from '../../cache/storage'
import { storageLabel } from '../../../config/configs'


const CodeScreen = () => {

      const router = useRoute()
      const navigation = useNavigation()
      const context = useContext(GeneralContext)
      const { setWarning, setIsLoading } = useContext(GeneralContext);
      const [code1, setCode1] = useState("")
      const [code2, setCode2] = useState("")
      const [code3, setCode3] = useState("")
      const [code4, setCode4] = useState("")
      const [code5, setCode5] = useState("")
      const [code6, setCode6] = useState("")
      const [confirmCode, setConfirmCode] = useState(router.params.confirmCode)

      const code1Ref = useRef()
      const code2Ref = useRef()
      const code3Ref = useRef()
      const code4Ref = useRef()
      const code5Ref = useRef()
      const code6Ref = useRef()


      useEffect(() => {
            let listener = listenerAuth(listenerFirebase)
            console.log('listener', listener)
            return listener
      }, []);

      useEffect(() => {
            nextFocusCode()
      }, [code1, code2, code3, code4, code5, code6])


      const nextFocusCode = () => {

            if (code1.length >= 1) {
                  code2Ref.current.focus()
            } if (code2.length >= 1) {
                  code3Ref.current.focus()
            } if (code3.length >= 1) {
                  code4Ref.current.focus()
            } if (code4.length >= 1) {
                  code5Ref.current.focus()
            }
            if (code5.length >= 1) {
                  code6Ref.current.focus()
            }
            if (code6.length >= 1) {
                  code1Ref.current.focus()
            }
      }

      const listenerFirebase = async (user) => {
            if (user) {
                  try {
                        const { status, data } = await api.post("/users", {
                              phone: router.params.phoneDDI
                        })
                        if (status == 200) {
                              setWarning([true, "Parabens por concluir nosso cadastro, Aproveite e recicle", true])
                              setItem(storageLabel.token_user, data.token)
                              context.autenticate(data.user)
                        } else {
                              navigation.goBack()
                              setWarning([true, "Ops, Algo de errado aconteceu", false])
                        }
                  } catch (error) {
                        setWarning([true, exceptions(error), false])
                  }
            }
            console.log(user);
      }

      const validateFields = () => {
            if (code1 != "" && code2 != "" && code3 != "" && code4 != "" && code5 != "" && code6 != "") {
                  return true
            }
            setWarning([true, "Alguns campos estão invalidos", false])
            return false
      }
      const validateCodes = async () => {
            setIsLoading(true)
            try {
                  if (validateFields()) {
                        const res = await confirmCode.confirm(`${code1}${code2}${code3}${code4}${code5}${code6}`)
                        if (!res) {
                              setWarning([true, "Ops, erro ao finalizar seu cadastro !", false])
                        }
                  }
            } catch (error) {
                  console.log("Erro ao confirmar codigo", error)
                  setWarning([true, exceptions(error), false])
            }
            setIsLoading(false)
      }

      return (

            <View style={styles.container}>
                  <Title>Validar Código</Title>

                  <View style={styles.regionCode}>
                        <TextInput
                              ref={code1Ref}
                              keyboardType="number-pad"
                              value={code1} onChangeText={setCode1}
                              maxLength={1}
                              style={styles.code} />
                        <TextInput
                              ref={code2Ref}
                              keyboardType="number-pad"
                              value={code2}
                              onChangeText={setCode2}
                              maxLength={1}
                              style={styles.code} />
                        <TextInput
                              ref={code3Ref}
                              keyboardType="number-pad"
                              value={code3}
                              onChangeText={setCode3}
                              maxLength={1}
                              style={styles.code} />

                        <TextInput
                              ref={code4Ref}
                              keyboardType="number-pad"
                              value={code4}
                              onChangeText={setCode4}
                              maxLength={1}
                              style={styles.code} />

                        <TextInput
                              ref={code5Ref}
                              keyboardType="number-pad"
                              value={code5}
                              onChangeText={setCode5}
                              maxLength={1}
                              style={styles.code} />

                        <TextInput
                              ref={code6Ref}
                              keyboardType="number-pad"
                              value={code6}
                              onChangeText={setCode6}
                              maxLength={1}
                              style={styles.code} />

                  </View>
                  <View style={styles.regionButtons}>
                        <Button onPress={() => validateCodes()} title={"Cadastrar"}></Button>
                        <Button onPress={() => requestCodePhone(router.params.phoneDDI)} title={"Reenviar codigo"}></Button>
                  </View>

            </View>

      )
}
export default CodeScreen