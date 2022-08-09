import React from 'react'
import { StyleSheet } from 'react-native'
import { colors } from '../../../globalStyle/colors'
import { fonts } from '../../../globalStyle/fonts'
import { metrics } from '../../../globalStyle/metrics'

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems:'center',
        justifyContent:"center"
    },


    // ============================= BEGIN ITEM =========================
    containerItem: {
        width: metrics.widthScreen *0.95,
        height:100,
        marginVertical:metrics.marginLarge,
        borderRadius:metrics.borderRadius,
        borderWidth:1.5,
        padding:metrics.paddingLarge,
        flexDirection:'row',
        justifyContent:'space-between',

    },
    regionItem: {
        
      justifyContent:"space-evenly",
      alignItems:'center',

    },
    hourItem: {
        color:colors.dark,
        fontSize:fonts.large,
    },
    statusItem: {
        color:colors.dark,
        fontSize:fonts.large,
    },
    regionImages:{
        flexDirection:'row'
    },
    imageItem: {
        width:  metrics.widthScreen * 0.06,
        height: metrics.widthScreen * 0.06,
        color:"#fff"
    }, 
    dateItem: {
        fontSize:fonts.large,
        color:colors.dark
    },  
    textNothing: {
       fontSize:fonts.large,
       justifyContent:"center"
    },




})
export default style