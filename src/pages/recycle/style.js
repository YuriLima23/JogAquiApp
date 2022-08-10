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
        borderWidth:1,
        backgroundColor: colors.background
    },
    imageButtonRecicle: {
        width: 41.55,
        height: 41.55
    }

})
export default style 