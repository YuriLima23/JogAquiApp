import React, { useState } from 'react'
import { Text, View } from 'react-native'

import styles from './style'

const Title = ({ children, view = true }) => {


    return (
        view ?
            <View style={styles.regionTitle}>
                <Text style={styles.title}>{children}</Text>
            </View>
            :
            <Text style={styles.title}>{children}</Text>)
    
        
}
export default Title