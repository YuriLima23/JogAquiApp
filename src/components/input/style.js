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
    sectionInput:{
        flexDirection:'row',
        borderWidth: metrics.borderWidh,
        borderRadius: metrics.borderRadius,
        justifyContent:"space-between",
        alignItems:'center'

    }, 
    sectionInputError:{
        flexDirection:'row',
        borderWidth: metrics.borderWidh,
        borderRadius: metrics.borderRadius,
        justifyContent:"space-between",
        alignItems:'center',
        borderColor:colors.red


    },

    input: {
        flex:1,
        color: colors.dark,
        marginHorizontal:metrics.marginLarge,
        paddingHorizontal:metrics.paddingLarge,
        color:colors.dark
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
        marginVertical:metrics.marginMedium,
        color: colors.red
    },
})
export default style