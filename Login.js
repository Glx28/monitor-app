import { StatusBar } from 'expo-status-bar'
import { Text, SafeAreaView, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import GlobalStyles from './GlobalStyles';
import { Ionicons } from '@expo/vector-icons';
import { auth } from './firebase';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export default function Login({ navigation }) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [isSignedIn, setIsSignedIn] = useState(false)

  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((re) => {
      navigation.navigate('Main');
      console.log(re)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const signOutUser = () => {
    signOut(auth)
    .then((re)=>{
      console.log(re)
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return (
      <SafeAreaView style={GlobalStyles.loginScreen}>
        <Text style={GlobalStyles.titleText}>Please sign in</Text>

        <Ionicons style={GlobalStyles.icon} name='key-outline' size={35}></Ionicons>

        <TextInput
          style={GlobalStyles.inputLogin}
          onChangeText={text => setEmail(text)}
          value={email}
          placeholder='Email...'
        ></TextInput>

  
        <TextInput
          style={GlobalStyles.inputLogin}
          onChangeText={text => setPassword(text)}
          value={password}
          placeholder='Password...'
          autoCompleteType="password"
          secureTextEntry={true}
          autoCapitalize="none">
        </TextInput>
  
        <TouchableOpacity style={GlobalStyles.signInButton} onPress={signInUser}>
          <Text style={GlobalStyles.buttonText}>Sign in</Text>
        </TouchableOpacity>
      </SafeAreaView>

      );
  }
