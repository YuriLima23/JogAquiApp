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

        marginTop: metrics.marginLarge,
        alignItems: 'center',
    },
    scroll: {

        height: metrics.heightScreen * 0.8
    },
    regionFlatList: {
        

    },
    containerInputFindAddress: {
        flexDirection:"row",
        alignItems:"center"

    },iconFindAddress: {
        color:colors.dark,
        marginRight:10,

    },
    textAddress: {
        flex:1,
        marginHorizontal:metrics.marginLarge,
        paddingHorizontal:metrics.paddingExtraLarge,
        color:colors.dark,
        borderRadius:metrics.borderRadius,
        borderWidth:1,
    }
    , flatList: {
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
        marginBottom: metrics.marginLarge

    },


})
export default style