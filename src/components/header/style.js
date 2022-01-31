import React from 'react'
import { StyleSheet } from 'react-native'
import { colors} from '../../../globalStyle/colors'
import { fonts } from '../../../globalStyle/fonts'
import { metrics } from '../../../globalStyle/metrics'
        
const style = StyleSheet.create({
    container:{
       width: metrics.widthScreen,
       height:70,
       backgroundColor: colors.background,
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-between'
    },
    imageLeft :{
        width: 38,
        height: 38,
        marginHorizontal:10
    },
    title:{
        color:colors.dark,
        fontSize:fonts.extraLarge,
        fontWeight:'bold'
    },
    iconRight:{
        marginHorizontal:10
        //margin:12
    }
        
})
export default style 