import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './style'

const Button = ({ title = 'Sim', size,smallButton = false, ...rest }) => {

    return (
        <TouchableOpacity style={smallButton ?styles.smallButton : styles.button} {...rest}>
            <Text style={styles.textButton}> {title}</Text>
        </TouchableOpacity>
    )
}
export default Button