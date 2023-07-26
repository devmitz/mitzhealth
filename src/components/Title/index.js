import React from 'react'
import { Text, View } from 'react-native'
import styles from './style'

export default function Title() {
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>MitzHealth</Text>
        </View>
    );
}