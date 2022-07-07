import React, { useState, useContext, useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { View, TextInput,  } from 'react-native'

import styles from './style'
import GeneralContext from '../../contexts/generalContext'
import { exceptions, requestCodePhone, signOutUser } from '../../utils/Firebase'
import api from '../../api/service'
import endpoints from '../../api/endpoints'
import { TextInput } from 'react-native-gesture-handler'

const SupportScreen = () => {
     const [suject, setSubject] = useState("");
     const [description, setDescription] = useState("");
     const { setIsLoading, setWarning } = useContext(GeneralContext)
     const navigation = useNavigation()


     return (
          <View style={styles.container}>
             <View style={styles.regionPicker}>
                  
             </View>
             <View style={styles.regionDescription}>
                  <TextInput numberOfLines={5}  style={styles.description}></TextInput>
             </View>
          </View >
     )
}
export default SupportScreen