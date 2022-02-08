import React from 'react'
import { StyleSheet } from 'react-native'
import { colors } from '../../../globalStyle/colors'
import { fonts } from '../../../globalStyle/fonts'
import { metrics } from '../../../globalStyle/metrics'

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: "center"
    },
    regionInput: {
        flex: 1,
        justifyContent: 'center',

    },

    regionButton: { 
        flexDirection:'row',
        marginTop: metrics.marginLarge,
        alignItems: 'center',
        justifyContent:"space-around"
    },
    scroll: {

        height: metrics.heightScreen * 0.8
    },
    regionFlatList: {


    }, flatList: {
        borderWidth: 1,
        margin: metrics.marginLarge,
        borderRadius: 5,
        height: 100,

    },
    itemFlatList: {

        flexDirection: 'row',
        marginHorizontal: metrics.marginLarge,
        alignItems: "center",
        borderBottomWidth: 1,
        padding:metrics.paddingLarge


    },
    title: {
        fontSize: fonts.extraLarge,
        color: colors.dark,
        alignSelf: "center",
        textAlign:"center",
        marginBottom: metrics.marginLarge

    },


})
export default style