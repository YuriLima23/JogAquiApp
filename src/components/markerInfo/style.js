import React from 'react'
import { StyleSheet } from 'react-native'
import { colors } from '../../../globalStyle/colors'
import { fonts } from '../../../globalStyle/fonts'
import { metrics } from '../../../globalStyle/metrics'


const style = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.transparent,

  },
  modalView: {
    backgroundColor: colors.light,
    borderRadius: metrics.borderRadius,
    marginHorizontal: metrics.marginLarge,
    padding:metrics.paddingExtraLarge

  },
  regionIcon: {
    alignItems:"flex-end",
  }, 
  regionAddress: {
    justifyContent:"center"
  },
  address: {
    fontSize:fonts.large,
    color:colors.dark,
    textAlign:"center",
    padding:metrics.paddingLarge,
    fontWeight:"bold"
  },
  regionInfo: {

  },
  regionCenter: {
  
  },
  titleInfo: {
    fontSize:fonts.large,
    color:colors.dark,
    fontWeight:"bold"
  },
  regionInfoCenter: {
    padding:metrics.paddingLarge,
    borderWidth:1,
    justifyContent:"center",
    alignItems:"center"
  },
  infoCenter: {
    fontSize:fonts.large,
    color:colors.dark
  },

  regionButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: metrics.screenWidth * 0.6,
    height: metrics.screenHeight * 0.07,
    margin: metrics.marginLarge,
    borderWidth: 1,
    borderColor: colors.dark,
    borderRadius: metrics.borderRadius
  },
  textBtn: {
    fontSize: fonts.large,
    color: colors.dark
  },

  button: {

  },



})
export default style