import React from 'react'
import { StyleSheet } from 'react-native'
import { colors } from '../../../globalStyle/colors'
import { fonts } from '../../../globalStyle/fonts'
import { metrics } from '../../../globalStyle/metrics'

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: "center"
    },
    regionTitle: {},
    
    regionTypesRecycle: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    subRegionTypesRecicle:{

    },
    regionType: {
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
        flex: 1,
        flexDirection: 'row',
        marginTop: metrics.marginLarge,
        alignItems: 'center',
        justifyContent: "space-around"
    },


})
export default style