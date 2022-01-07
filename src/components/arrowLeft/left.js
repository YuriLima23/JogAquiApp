import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './style'
import Feather from "react-native-vector-icons/Feather"
import { colors } from '../../../globalStyle/colors'
const LeftArrow = ({ onPress }) => {

    return <TouchableOpacity onPress={onPress}>
        <Feather name="arrow-left" size={35} color={colors.dark} />
    </TouchableOpacity >
}
export default LeftArrow