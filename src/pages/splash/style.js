import React from 'react'
import { StyleSheet } from 'react-native'
import { colors } from "../../../globalStyle/colors"
import { fonts } from '../../../globalStyle/fonts'

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: "center",
        alignItems: 'center'
    },

    textLoading: {
        color: colors.dark,
        fontSize: fonts.loading,

    },


})
export default style