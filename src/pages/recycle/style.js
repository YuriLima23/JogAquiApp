import React from 'react'
import { StyleSheet } from 'react-native'
import { colors } from '../../../globalStyle/colors'
import { metrics } from '../../../globalStyle/metrics'

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    map: {
        position: 'absolute',
        width: metrics.widthScreen,
        height: metrics.heightScreen

    },
    buttonCreateRecicle: {
        marginRight: 30,
        marginBottom: 30,
        padding: 10,
        borderRadius: 40,
        backgroundColor: colors.background
    },
    imageButtonRecicle: {
        width: 50,
        height: 50
    }

})
export default style 