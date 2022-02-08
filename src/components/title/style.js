import React from 'react'
import { StyleSheet } from 'react-native'
import { colors } from '../../../globalStyle/colors'
import { fonts } from '../../../globalStyle/fonts'
import { metrics } from '../../../globalStyle/metrics'


const style = StyleSheet.create({
   
    regionTitle: {
        flex: 1,
        justifyContent:'flex-end',
        alignItems:'center',

    },
    title: {
        color:colors.dark,
        fontSize:35,
        textAlign:"center"
    },
    
})
export default style