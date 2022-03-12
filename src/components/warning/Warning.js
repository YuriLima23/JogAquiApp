import React, { useContext } from 'react'
import { Modal, View, Text, TouchableOpacity } from 'react-native'
import { colors } from '../../../globalStyle/colors'
import { metrics } from '../../../globalStyle/metrics'
import Entypo from 'react-native-vector-icons/Entypo'
import styles from "./style"
import style from './style'

const Warning = ({ show, message, success = true, setWarning }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={show}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>

                    <View style={styles.regionWarning}>
                        <Text style={style.title}>Aviso</Text>
                        <Entypo name={success ? "emoji-happy" : "emoji-sad"} size={metrics.widthScreen * 0.25} color={colors.dark}></Entypo>
                    </View>
                    <View style={styles.regionMessage}>
                        <Text style={styles.message}>{message || "Um aviso sobre algo de legal que aconteceu aqui,"}  </Text>
                    </View>

                    <View style={styles.regionButton}>
                        <TouchableOpacity onPress={() => setWarning([false, "", false])} style={styles.btn}>
                            <Text style={styles.textBtn}>Entendi</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </Modal>

    )
}
export default Warning