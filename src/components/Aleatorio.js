import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default ({ min, max }) => {
    const rNum = Math.floor((Math.random() * (max - min + 1)) + min)

    return (
        <Text style={Estilo.txtG}>
            Número aleatório entre {min} e {max}: {rNum}
        </Text>
    )
}