import React from 'react'
import { StyleSheet } from 'react-native'
import { colors } from '../../../globalStyle/colors'
import { fonts } from '../../../globalStyle/fonts'
import { metrics } from '../../../globalStyle/metrics'

const style = StyleSheet.create({
    scroll:{
        flex:1,
    },
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center'
    },

    regionTitle: {
        flex: 1,
        justifyContent:'flex-end',
        alignItems:'center',

    },
    title: {
        color:colors.dark,
        fontSize:35
    },
    regionInputs: {
        flex:1.5,
        justifyContent:'center',
       
       
    },
    regionButtons: {
        flex: 1,
        alignItems:"center",
        
       
       
    },


})
export default style