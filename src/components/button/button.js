import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './style'

const Button = ({ title = 'Sim', size, ...rest }) => {

    return (
        <TouchableOpacity style={styles.button} {...rest}>
            <Text style={styles.textButton}> {title}</Text>
        </TouchableOpacity>
    )
}
export default Button