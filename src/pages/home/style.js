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
    sectionBtn:{
        borderWidth:1,
        borderColor:colors.dark,
        width: metrics.screenWidth * 0.7,
        height: metrics.screenHeight * 0.1,
        borderRadius:10,
        marginVertical:20
    },
    btn:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    },
    btnText:{
        fontSize:fonts.textButtonRegister,
        color: colors.dark,
    }

})
export default style