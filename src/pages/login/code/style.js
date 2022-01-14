import React from 'react'
import { StyleSheet } from 'react-native'
import { colors } from '../../../../globalStyle/colors'
import { fonts } from '../../../../globalStyle/fonts'
import { metrics } from '../../../../globalStyle/metrics'

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center'
    },

    regionTitle: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',

    },

    title: {
        color: colors.dark,
        fontSize: 35
    },
    regionCode:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    code :{
        borderBottomWidth:1,
        borderBottomColor:colors.dark,
        width: metrics.screenWidth * 0.15,
        marginHorizontal:metrics.marginLarge,
        fontSize:fonts.large,
        textAlign:'center',
        color:colors.dark
    },
    regionButtons: {
        flex: 1,
        alignItems:"center",
        
       
       
    },
})
export default style