import React from 'react'
import { StyleSheet } from 'react-native'
import { colors } from '../../../globalStyle/colors'
import { metrics } from '../../../globalStyle/metrics'
import { fonts } from '../../../globalStyle/fonts'

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        margin: metrics.marginExtraLarge
    },
    regionPicker: {
       
       
        borderWidth: 1,
        marginBottom:metrics.marginLarge
        
    },
    regionDescription: {
        flex: 1,
        borderWidth: 1
    },
    description: {
        textAlignVertical:'top',
        flex:1,
        color:colors.dark
    },
    picker: {
        color:colors.dark,
        justifyContent:"center",
        alignItems:"center",
    }, 
    regionBtn: {
       
        justifyContent:"center",
        alignItems:"center",
    },

})

export default style 