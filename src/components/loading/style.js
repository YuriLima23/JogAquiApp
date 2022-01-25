import React from 'react'
import { StyleSheet } from 'react-native'
import { colors } from '../../../globalStyle/colors'
import { fonts } from '../../../globalStyle/fonts'
import { metrics } from '../../../globalStyle/metrics'


const style = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.transparent,
     
      },
      modalView: {
        backgroundColor:colors.light,
        borderRadius: metrics.borderRadius,
        width: metrics.widthScreen * 0.8,
        height: metrics.heightScreen * 0.2,
        alignItems: "center",
        justifyContent:'center'
      
      },
      
      loadingText: {
        fontSize:fonts.large,
        color: colors.dark,
        textAlign: "center"
      }
})
export default style