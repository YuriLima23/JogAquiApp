import React, { useState } from 'react'
import { Text, View } from 'react-native'

import styles from './style'

const Title = ({ children }) => {


    return (
        <View style={styles.regionTitle}>
            <Text style={styles.title}>{children}</Text>
        </View>)
}
export default Title