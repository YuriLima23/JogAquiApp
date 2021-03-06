import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from '../../../globalStyle/colors'
import styles from './style'

const Input = ({ error, messageError, placeholder, security, ...rest }) => {
    const [safety, setSafety] = useState(security)
   
    return (
        <View style={styles.container}>
            <View style={!error ? styles.sectionInput : styles.sectionInputError}>
                <TextInput
                    placeholder={placeholder}
                    secureTextEntry={safety}
                    placeholderTextColor={colors.placeholders}
                    style={styles.input}
                    {...rest} />
                {security &&
                    <Ionicons
                        style={styles.iconSecurity}
                        onPress={() => setSafety(!safety)} name={safety ? "eye-off-outline" : "eye-outline"}
                        size={25}
                        color={colors.dark} />}
            </View>
            {error && <Text style={styles.errorText}> {messageError || "Campo invalido !"} </Text>}
        </View>
    )
}
export default Input