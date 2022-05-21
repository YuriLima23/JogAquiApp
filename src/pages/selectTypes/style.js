import React from 'react'
import { StyleSheet } from 'react-native'
import { colors } from '../../../globalStyle/colors'
import { fonts } from '../../../globalStyle/fonts'
import { metrics } from '../../../globalStyle/metrics'

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: "center",
        
    },
    regionTitle: {},
    
    regionTypesRecycle: {
       width: metrics.screenWidth * 0.7,
        flexWrap:"wrap",
        flexDirection:'row',
        justifyContent:'space-between',
        alignSelf:"center",
        marginVertical:50
        
    },
    subRegionTypesRecicle:{

    },
    regionType: {
        justifyContent: "center",
        alignItems: "center",
        margin:metrics.marginLarge
    }, 
    regionTypeSelected: {
        backgroundColor:colors.red,
        justifyContent: "center",
        alignItems: "center",
        margin:metrics.marginLarge
    },
   
    label: {
        color: colors.dark,
        fontSize: fonts.large
    },

    imageTrash: {
        width: 80,
        height: 100,
    },

    regionButton: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around"
    },


})
export default style