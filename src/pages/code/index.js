import React, { useState, useEffect, useRef } from 'react'
import { useNavigation } from '@react-navigation/core'
import { View, Text, Keyboard, TextInput } from 'react-native'
import styles from "./style"

import Button from '../../components/button/Button'
import Title from '../../components/title/Title'


const CodeScreen = () => {
      const [code1, setCode1] = useState("")
      const [code2, setCode2] = useState("")
      const [code3, setCode3] = useState("")
      const [code4, setCode4] = useState("")

      const code1Ref = useRef()
      const code2Ref = useRef()
      const code3Ref = useRef()
      const code4Ref = useRef()





      const navigation = useNavigation()

      useEffect(() => {
            if (code1.length >= 1) {
                  code2Ref.current.focus()
            } if (code2.length >= 1) {
                  console.log("Focou no 2")
                  code3Ref.current.focus()
            } if (code3.length >= 1) {
                  code4Ref.current.focus()
            } if (code4.length >= 1) {
                  code1Ref.current.focus()
            }
            console.log(code1, code2, code3, code4)
      }, [code1, code2, code3, code4])

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




                  </View>
                  <View style={styles.regionButtons}>
                        <Button onPress={() => false} title={"Entrar"}></Button>
                        <Button title={"Reenviar codigo"}></Button>
                  </View>

            </View>

      )
}
export default CodeScreen