import React from 'react'
import { View, Text } from 'react-native'

const ParamScreen = props => {
    evenOdd = (angka) => {
        if (angka%2==0){
            return('angka adalah genap')
        }else{
            return ('angka adalah ganjil')
        }
    }
    return (
        <View style={{
            flexDirection : 'column',
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        }}>
            <Text style={{fontSize:36, color:'red'}}>
                Param Screen
            </Text>
            <Text style={{fontSize:36, color:'red'}}>
                {props.navigation.getParam('nama', 'NO-NAMA')}
            </Text>
            <Text style={{fontSize:36, color:'red'}}>
                angka anda {props.navigation.getParam('angka', 'NO-ANGKA')}
            </Text>
            <Text style={{fontSize:36, color:'red'}}>
                {evenOdd(props.navigation.getParam('angka'))}
            </Text>
            

        </View>
    )
}

export default ParamScreen