import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Input, Button } from 'native-base'
import firebase from 'firebase'

const RegisterScreen = props => {

    const [username, setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repPassword, setrepPassword] = useState('')

    const onRegister = () => {
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(user => {
            console.log(user.user.uid)
            const uid = user.user.uid
            const db = firebase.database().ref(`/users/${uid}`)
            .push({
                username : username,
                email : email
            })
            .then(() => console.log('Register Success!'))
            .catch(() => console.log('Register Failed!'))
        })
        .catch(err => {
            console.log(err)
        })
    }
    // log in ; import sign in withemailandpassword

    return(
        <View>
              <View style={{flex:1}}>
                    <Text>Register Screen</Text>
              </View>
              <View style={{flex:1}}>
                    <Input placeholder='Username' onChangeText={text => setUsername(text)}/>
                    <Input placeholder='Email' onChangeText={text => setEmail(text)}/>
                    <Input placeholder='Password' onChangeText={text => setPassword(text)}/>
                    <Input placeholder='Repeat Password' onChangeText={text => setrepPassword(text)}/>
                    <Button primary onPress={onRegister}>
                            <Text>Register</Text>
                    </Button>
              </View>
        </View>
    )
}

export default RegisterScreen