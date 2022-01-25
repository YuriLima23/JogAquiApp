import React from 'react'
import { StyleSheet } from 'react-native'
import { colors} from '../../../globalStyle/colors'
import { metrics } from '../../../globalStyle/metrics'
        
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent:'center',
    },
    regionInput:{
        width: metrics.widthScreen,
        height:  metrics.heightScreen * 0.4,
        justifyContent:'center'
    },

    regionButton:{
        flex:1,
        alignItems:'center',
    },
    scroll:{
        // flex:1,
        height: metrics.heightScreen * 0.7,
    },
})
export default style 