import React from 'react'
import { StyleSheet } from 'react-native'
import { colors} from '../../../globalStyle/colors'
import { fonts } from '../../../globalStyle/fonts'
import { metrics } from '../../../globalStyle/metrics'
        
const style = StyleSheet.create({
    button:{
        justifyContent:'center',
        alignItems:'center',
        width: metrics.screenWidth * 0.6,
        height: metrics.screenHeight * 0.08,
        margin:metrics.marginLarge,
        borderWidth:1,
        borderColor:colors.dark,
        borderRadius:metrics.borderRadius
    },
    smallButton:{
        justifyContent:'center',
        alignItems:'center',
        width: metrics.screenWidth * 0.3,
        height: metrics.screenHeight * 0.08,
        margin:metrics.marginLarge,
        borderWidth:1,
        borderColor:colors.dark,
        borderRadius:metrics.borderRadius
    },
    textButton:{
        fontSize:fonts.large,
        color:colors.dark
    }
        
})
export default style 