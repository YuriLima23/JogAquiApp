import React, { useState, useEffect, useContext } from 'react'
import { useNavigation } from '@react-navigation/core'
import { View, Text, FlatList, KeyboardAvoidingViewBase, ActivityIndicator, TouchableHighlight, Keyboard, TouchableOpacity } from 'react-native'
import styles from './style'

import GeneralContext from '../../contexts/generalContext'

import CreateSolicitationContext from '../../contexts/createSolicitationContext'

const WalletScreen = () => {

     const navigation = useNavigation()
     const context = useContext(GeneralContext);
     const contextSolicitation = useContext(CreateSolicitationContext);


     const nextPage = () => {


     }
     var array = [
          { id: 1, address: "Rua cecyra fallace saraiva, 815 ", money: 10.50 },
          { id: 2, address: "Rua cecyra fallace saraiva, 816 ", money: 10.50 },
          { id: 3, address: "Rua cecyra fallace saraiva com mais algum texto, 817 ", money: 10.50 },
          { id: 4, address: "Rua cecyra fallace saraiva, 818 ", money: 10.50 },
          { id: 5, address: "Rua cecyra fallace saraiva, 819 ", money: 10.50 }
     ]

     const Item = ({item}) => {
          console.log("ITEM :", item.id)
          return<View style={styles.regionItem}>
               <View style={styles.regionAddressItem}>
                    <Text style={styles.textAddressItem}>{item.address}</Text>
               </View>
               <View style={styles.regionMoneyItem}>
                    <Text style={styles.textMoneyItem}>{item.money}</Text>
               </View>
          </View>
     }

     return (
          <View style={styles.container}>
               <View style={styles.regionName}>
                    <Text style={styles.name}>{context.user.name }</Text>
               </View>
               <View style={styles.regionWallet}>
                    <View style={styles.regionValueWallet}>
                         <Text style={styles.valueWallet}>Saldo: R$ 50,20</Text>
                    </View>
                    <View style={styles.regionNumberOfCollect}>
                         <Text style={styles.valueCollect}>Pedidos Coletados: 13 </Text>
                    </View>
               </View>
               <View style={styles.regionList}>
                    <FlatList  data={array} renderItem={(props) => <Item {...props} />} />

               </View>

          </View >
     )
}
export default WalletScreen