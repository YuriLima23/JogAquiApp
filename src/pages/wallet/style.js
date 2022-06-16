import React from 'react'
import { StyleSheet } from 'react-native'
import { colors } from '../../../globalStyle/colors'
import { fonts } from '../../../globalStyle/fonts'
import { metrics } from '../../../globalStyle/metrics'

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    regionName:{
        width:metrics.screenWidth,
        height:metrics.heightScreen *0.2,
        paddingTop:metrics.paddingExtraLarge,
        justifyContent:"center",
        alignItems:'center'
    }, 
    regionWallet:{
        justifyContent:"space-around",
        flexDirection:"row",
        marginBottom:metrics.marginLarge
    },
    regionValueWallet:{
        width:140,
        height:120,
        borderColor:colors.dark,
        borderWidth:2,
        justifyContent:"center",
        alignItems:'center'
    }, 
    regionList:{
     flex:1,
     
    },
     
    regionNumberOfCollect:{
        width:140,
        height:120,
        borderColor:colors.dark,
        borderWidth:2,
        justifyContent:"center",
        alignItems:'center'
    },
    name:{
        color:"#000",
        fontSize:30
    }, 
    valueWallet:{
        color:"#000",
        fontSize:20,
        textAlign:"center",
    }, 
    valueCollect:{
        color:"#000",
        fontSize:20,
        textAlign:"center",
    }, 
    regionItem:{
        flex:1,
        borderWidth:1,
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center",
        margin:metrics.marginLarge,        
        padding:metrics.paddingExtraLarge, 
        borderRadius:metrics.borderRadius       
    },


    regionAddressItem:{
       width:metrics.widthScreen * 0.5
    },

    textAddressItem:{
        color:"#000",
        fontSize:20,
        textAlign:"center",
    },

    textMoneyItem:{
        color:"#000",
        fontSize:20,
        textAlign:"center",
    },



})
export default style