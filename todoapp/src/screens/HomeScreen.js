import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'native-base'
import { TextInput } from 'react-native'

const HomeScreen = (props) => {
    const [value, onChangeText] = React.useState('Useless Placeholder')
    
    return (
        <View style={{
            flexDirection : 'column',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{fontSize: 36, color: 'red'}}>
                Home Screen
            </Text>
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={value}
            />
            <Button primary onPress={() => props.navigation.navigate('ParamScreen', {
                nama: 'seto',
                angka:[value]
            })}>
                <Text>Go To Stack 1</Text>
            </Button>
        </View>
    )
}

export default HomeScreen