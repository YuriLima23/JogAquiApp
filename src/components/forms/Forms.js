import React from 'react'
import { Modal, View, Text, ActivityIndicator, TextInput, TouchableOpacityBase, TouchableOpacity } from 'react-native'
import { colors } from '../../../globalStyle/colors'
import { metrics } from '../../../globalStyle/metrics'
import Entypo from 'react-native-vector-icons/Entypo'

import Title from '../title/Title'
import styles from "./style"
import Button from '../button/Button'
import style from './style'
import Input from '../input/Input'

const Forms = ({ show, message }) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={true}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.regionTitle}>
                        <Title view={false} >Formulario</Title>
                    </View>
                    <View style={styles.regionDescribe}>
                        <Text style={styles.description}>{message || "Para cadastrar um ponto de coleta, digite seu cpf"} </Text>
                    </View>
                    <View style={styles.regionForm}>
                        <Input placeholder="CPF"></Input>
                    </View>

                    <View style={styles.regionButton}>
                        <TouchableOpacity onPress={() => false} style={styles.btn}>
                            <Text style={styles.textBtn}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => false} style={styles.btn}>
                            <Text style={styles.textBtn}>Confirmar</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </Modal>

    )
}
export default Forms