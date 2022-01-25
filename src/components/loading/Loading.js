import React from 'react'
import { Modal, View, Text, ActivityIndicator, TextInput } from 'react-native'
import { colors } from '../../../globalStyle/colors'
import { metrics } from '../../../globalStyle/metrics'
import styles from "./style"

const Loading = ({ show }) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={show}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <ActivityIndicator size={metrics.widthScreen * 0.18} color={colors.dark} ></ActivityIndicator>
                    <Text style={styles.loadingText}>Carregando</Text>
                </View>
            </View>
        </Modal>

    )
}
export default Loading