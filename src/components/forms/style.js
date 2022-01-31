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
    marginHorizontal:metrics.marginLarge

  },
  regionWarning: {
    justifyContent: "center",
    alignItems: 'center',
    marginVertical:metrics.marginLarge
  },
  regionMessage: {
    justifyContent: "center",
    alignItems: 'center',
    marginVertical:metrics.marginLarge,
    marginHorizontal:metrics.marginLarge


  },
  regionTitle:{
    alignItems:'center'
  },
  title:{
    fontSize:40,
    color:colors.dark
  },
  regionDescribe:{
    margin:metrics.marginLarge
  },
  description: {
    color: colors.dark,
    fontSize: fonts.large,
    textAlign: 'center'
  },

  regionButton:{
    flexDirection:'row',
    justifyContent:"center",
    alignItems:"center",
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: metrics.screenWidth * 0.3,
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