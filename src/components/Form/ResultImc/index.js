import React from 'react'
import { Text, View, TouchableOpacity, Share } from 'react-native'
import styles from './style'

export default function ResultImc(props) {

    const onShare = async () => {
        const result = await Share.share({
            message: "Meu imc hoje é: " + props.resultImc
        })
    }

    return(
        <View style={styles.contextImc}>
            <View style = {styles.boxShareButton}>
                <Text style={styles.information}>{props.messageResultImc}</Text>
                <Text style={styles.numberImc}>{props.resultImc}</Text>
            
                <TouchableOpacity style = {styles.share}
                onPress={onShare}>
                    <Text style = {styles.textShare}>Compartilhar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}