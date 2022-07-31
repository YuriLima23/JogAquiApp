import React, { useContext } from 'react'
import { Modal, View, Text, TouchableOpacity } from 'react-native'
import { colors } from '../../../globalStyle/colors'
import styles from "./style"
import GeneralContext from '../../contexts/generalContext'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { formateStringDateAndTime } from '../../utils/formatter'

const CardInfo = ({info, fn}) => {
    const context = useContext(GeneralContext)
    return (
        <Modal animationType="slide" transparent={true} visible={context.showCardInfo}>
            <View style={styles.centeredView}>
                {console.log('info', info)}
                <View style={styles.modalView}>
                    <View style={styles.regionIcon}>
                        <FontAwesomeIcon onPress={() => context.setShowCardInfo(false)} name="close" size={22} color={colors.dark} />
                    </View>
                    <View style={styles.regionAddress}>
                        <Text style={styles.address}>{info.address}</Text>
                    </View>
                    <View style={styles.regionInfo}>
                        <View style={styles.regionCenter}>
                            <Text style={styles.titleInfo}>Tipos de Reciclaveis</Text>
                            <View style={styles.regionInfoCenter}>
                                <Text style={styles.infoCenter}> {info.types_recicles.map((item) => item.name).toString()}</Text>
                            </View>
                        </View>
                        <View style={styles.regionCenter}>
                            <Text style={styles.titleInfo}>Data da coleta</Text>
                            <View style={styles.regionInfoCenter}>
                                <Text style={styles.infoCenter}> {`${formateStringDateAndTime(info.date_of_collect).date} as ${formateStringDateAndTime(info.date_of_collect).time}:`}</Text>
                            </View>
                        </View>
                        <View style={styles.regionCenter}>
                            <Text style={styles.titleInfo}>Status</Text>
                            <View style={styles.regionInfoCenter}>
                                <Text style={styles.infoCenter}> Plastico, Ferro</Text>
                            </View>
                        </View>
                        <View style={styles.regionCenter}>
                            <Text style={styles.titleInfo}>Peso</Text>
                            <View style={styles.regionInfoCenter}>
                                <Text style={styles.infoCenter}>{info.weight}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.regionButton}>
                        <TouchableOpacity onPress={() =>{
                             fn()
                             context.setShowCardInfo(false)
                             }} style={styles.btn}>
                            <Text style={styles.textBtn}>Remover</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </Modal>

    )
}
export default CardInfo