import React, { useState, useEffect, useContext } from 'react'
import { useNavigation } from '@react-navigation/core'
import { View, Text, FlatList, KeyboardAvoidingViewBase, ActivityIndicator, TouchableHighlight, Keyboard, TouchableOpacity } from 'react-native'
import styles from './style'

import GeneralContext from '../../contexts/generalContext'

import CreateSolicitationContext from '../../contexts/createSolicitationContext'
import api from '../../api/service'
import endpoints from '../../api/endpoints'
import { exceptions } from '../../utils/Firebase'
import { metrics } from '../../../globalStyle/metrics'
import { colors } from '../../../globalStyle/colors'

const WalletScreen = () => {

     const [dataWallet, setDataWallet] = useState();
     const navigation = useNavigation()
     const context = useContext(GeneralContext);
     const contextSolicitation = useContext(CreateSolicitationContext);

     useEffect(() => {
          const unsubscribe = navigation.addListener('focus', () => {
               getDataWallet()
          });
          return unsubscribe;

     }, [navigation])
     const getDataWallet = async () => {
          try {
               const response = await api.get(endpoints.getDataWallet)
               console.log('response', response.data)
               setDataWallet(response.data)
          } catch (error) {
               console.log('Erro ao recuperar os dados da carteira')
               context.setWarning([true, exceptions(error), false])
          }
     }


     const Item = ({ item }) => {
          console.log("ITEM : ", item);
          return <View style={styles.regionItem}>
               <View style={styles.regionAddressItem}>
                    <Text style={styles.textAddressItem}>{item.address}</Text>
               </View>
               <View style={styles.regionMoneyItem}>
                    <Text style={styles.textMoneyItem}>R$: {item.total}</Text>
               </View>
          </View>
     }

     if (!dataWallet) {
          return <ActivityIndicator size={metrics.widthScreen * 0.18} color={colors.dark} ></ActivityIndicator>

     }
     return (
          <View style={styles.container}>
               <View style={styles.regionName}>
                    <Text style={styles.name}>{context.user.name}</Text>
               </View>
               <View style={styles.regionWallet}>
                    <View style={styles.regionValueWallet}>
                         <Text style={styles.valueWallet}>Saldo: R$ {dataWallet.balance.toFixed(2)}</Text>
                    </View>
                    <View style={styles.regionNumberOfCollect}>
                         <Text style={styles.valueCollect}>Pedidos Coletados: {dataWallet.solicitations.length} </Text>
                    </View>
               </View>
               <View style={styles.regionList}>
                    {dataWallet.solicitations.length > 0 ? <FlatList data={dataWallet.solicitations} renderItem={(props) => <Item {...props} />} />
                         :
                         <Text style={styles.textNotFound}>Nem uma solicitação consolidada.</Text>
                    }
               </View>

          </View >
     )
}
export default WalletScreen