import React,{useState} from 'react';
import { StyleSheet, Text, View , Button , TextInput} from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0)
  const [inputText, setInputText] = useState('')
  const namaku = 'Ayla'
  const tambahan = () => {
    return 2*3
  }
  
  return (
    <View style={{...styles.container, ...styles.bgRed}}>
      <Text>Open App to start working on your app!</Text>
      <Text>{namaku}</Text>
      <Text>{tambahan()}</Text>
      <View style={{flex:1}}>
        <Text style={{textAlign:'center'}}>{counter}</Text>
        <Button title='ADD' onPress={()=>setCounter(counter + 1)}/>      
      </View>
      <View style={{flex:1}}>
        <Text>{inputText}</Text>
        <TextInput onChangeText={text => setInputText(text)} placeHolder='input text'/>
        <Button title='ADD' onPress={()=>setCounter(counter + 1)}/>      
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // bgRed :{
  //   backgroundColor:'yellow'
  // },
  // textWhite :{
  //   color: 'white'
  // }
});
