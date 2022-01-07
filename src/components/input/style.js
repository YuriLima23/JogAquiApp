import React from 'react'
import { StyleSheet } from 'react-native'
import { colors } from '../../../globalStyle/colors'
import { fonts } from '../../../globalStyle/fonts'
import { metrics } from '../../../globalStyle/metrics'


const style = StyleSheet.create({
    container:{
        flexDirection:'column',
        margin:metrics.marginLarge
    }, 
    sectionShowPassword:{
        flexDirection:'row',
        borderWidth: metrics.borderWidh,
        borderRadius: metrics.borderRadius,
        justifyContent:"space-between",
        alignItems:'center'

    },

    input: {
        color: colors.dark,
        
        marginHorizontal:metrics.marginLarge,
        paddingHorizontal:metrics.paddingLarge
    },
     inputError: {
        color: colors.dark,
        borderWidth: metrics.borderWidh,
        borderRadius: metrics.borderRadius,
        marginHorizontal:metrics.marginLarge,
        paddingHorizontal:metrics.paddingLarge,
        borderColor:colors.red
        
    },
    iconSecurity:{
        marginRight:metrics.marginLarge
    },
    errorText: {
        fontSize: fonts.medium,
        color: colors.dark,
        marginHorizontal:metrics.marginLarge,
        marginVertical:metrics.marginMedium,
        color: colors.red
    },
})
export default style