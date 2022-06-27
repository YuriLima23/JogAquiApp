import React from 'react'
import { StyleSheet } from 'react-native'
import { colors } from '../../../globalStyle/colors'
import { fonts } from '../../../globalStyle/fonts'
import { metrics } from '../../../globalStyle/metrics'

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background
    },
    regionCards: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    regionCardsDefault: {
        flexDirection: "row",
        marginBottom:metrics.marginExtraLarge
    },
    regionButton:{
        flexDirection: "row",
        width:metrics.widthScreen * 0.4 ,
        height:metrics.heightScreen * 0.15 ,
        borderColor: colors.dark,
        borderWidth: 1,
        borderRadius: metrics.borderRadius,
        justifyContent: 'center',
        alignItems: 'center',
        marginStart:10,

    },
 
    regiontTitle:{
       
        justifyContent:'center',
        alignItems:'center',
        marginTop:metrics.widthScreen * 0.3
    },
    centerTitle: {
        color: colors.dark,
        fontSize: fonts.extraLarge
    }


})
export default style