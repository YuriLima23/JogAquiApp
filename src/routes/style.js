import React from 'react'
import { StyleSheet } from 'react-native'
import { colors } from '../../globalStyle/colors'
import { fonts } from '../../globalStyle/fonts'
import { metrics } from '../../globalStyle/metrics'
        
const style = StyleSheet.create({
    regionName:{
       flex:1,
        alignItems:"center",
        borderBottomColor:colors.dark,
        borderBottomWidth:2
    },
    regionMenu:{
        flex:3
    },
    name:{
        fontSize:fonts.extraLarge,
        color: colors.dark,
        marginVertical:metrics.marginLarge
        
    },  
    document:{
        fontSize:fonts.large,
        color: colors.dark,
        marginVertical:metrics.marginLarge,
        color:colors.transparent
        
    },
       money:{
        fontSize:fonts.large,
        color: colors.dark,
        marginVertical:metrics.marginLarge,
        color:colors.dark
        
    },
})
export default style 