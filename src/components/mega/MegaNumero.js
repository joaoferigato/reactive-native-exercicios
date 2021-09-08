import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import Estilo from '../estilo'

export default ({ num }) => {
    return (
        <SafeAreaView style={style.Conainer}>
            <Text style={[Estilo.txtG, style.Num]}>
                {num}
            </Text>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    Conainer: {
        height: 50,
        width: 50,
        backgroundColor: '#000',
        margin: 5,
        borderRadius: 25
    },
    Num: {
        color: '#FFF'
    }
})