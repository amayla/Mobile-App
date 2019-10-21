import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, FlatList} from 'react-native';
import{ Grid,Row,Col,Content,Container,Header,Input,H1, Button } from 'native-base'

export default function App() {

  const [input, setInput] = useState('')
  const [data, setData] = useState([])

  const renderData = () => {
    return data.map((val,index) => {
      return(
        <Text key={index} style={{color:'white'}}>
          {val}
        </Text>
      )
    })
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: 'black',
      flexDirection : 'column',
      justifyContent: 'center'
    }}>
          {/* HEADER + INPUT */}
          <View style={{flex:1,
            //backgroundColor:'white'
              justifyContent:'space-around'}}>
              <H1 style={{
                color:'white',
                marginTop:30,
                textAlign:'center'
              }}>Welcome to my to do app!</H1>
      
          <View style={{flexDirection:'row',
                        justifyContent :'space-around',
                        paddingHorizontal:10}}>
              <Input placeHolder='New Todo' onChangeText={(text) => setInput(text)}
              style={{borderWidth:1,
                      borderBottomColor:'lightgrey',
                      marginRight:15,
                      color:'white'}}/>
              <Button light style={{padding:5}} onPress={() => setData([...data, {
                key: Date.now().toString(),
                value: input
              }])}>
                <Text>Add New</Text>
              </Button>
          </View>
      </View>
        <View style={{
        flex:3,
        flexDirection:'column'
        }}>
            <View style={{flex:1}}>
              <Text style={{color:'white',
                            textAlign:'center'}}>
                TO DO GOES HERE
                {input}
              </Text>
            </View>
            <View style={{
              flex : 9,
              // backgroundColor : 'white'
            }}>
                {/* {renderData()} */}
                <FlatList data={data} renderItem={({item}) => 
                <View style={{flexDirection:'row'}}>
                  <Text  key={item.key} style={{fontSize:20,color:'white',padding:20, flex:4}}>{item.value}</Text>
                <Button danger style={{flex:1}}>
                  <Text style={{padding:5, marginTop:'auto',marginRight:'auto',marginLeft:'auto',marginBottom:'auto'}}>Delete</Text>
                </Button>
                </View>
                }/>
            </View>

        </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  
});
