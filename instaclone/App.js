import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import firebase from 'firebase'
import RegisterScreen from './src/screens/RegisterScreen';

export default function App() {
    var firebaseConfig = {
      apiKey: "AIzaSyBeUgKafjE6VzwuYB0wzcCdD2z29M1dgcM",
      authDomain: "instaclone-73148.firebaseapp.com",
      databaseURL: "https://instaclone-73148.firebaseio.com",
      projectId: "instaclone-73148",
      storageBucket: "instaclone-73148.appspot.com",
      messagingSenderId: "668222438097",
      appId: "1:668222438097:web:372fdf26bc13297676e3f0"
    };
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig)

  return (
    <View style={styles.container}>
        <RegisterScreen/>
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
});
