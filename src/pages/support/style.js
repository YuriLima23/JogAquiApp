import React from 'react'
import { StyleSheet } from 'react-native'
import { colors } from '../../../globalStyle/colors'
import { metrics } from '../../../globalStyle/metrics'
import { fonts } from '../../../globalStyle/fonts'

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
    },
    scroll:{
        flex:1,
    },
    regionImageProfile: {
        flex:1,
        marginBottom:metrics.marginExtraLarge
    }, 
    regionImage: {
      
    },
    imageProfile: {
        resizeMode: 'contain',
        borderRadius: 90,
        alignSelf:"center"
    },   
    imageProfileURI: {
        width:metrics.screenWidth * 0.5,
        height:metrics.screenHeight * 0.27,
     
        borderRadius: 90,
        alignSelf:"center"
    },
    regionInput: {
       flex:2,
        justifyContent: 'center'
    },

    regionButton: {
        flex: 1,
        alignItems: 'center',
    },
    scroll: {
        flex: 1,
        height: metrics.heightScreen * 0.8,
    },
    nameProfile: {
        fontSize: fonts.extraLarge,
        color: colors.dark,
        fontWeight: "bold",
        textAlign: "center"

    },
})
export default style 