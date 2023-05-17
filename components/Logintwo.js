import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Logintwo = () => {
  
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  return (
    <KeyboardAvoidingView
      style={styles.container}
     
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground source={require('../assets/logintwo.png')} style={{ flex: 1 }}>
        <View style={styles.screen}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Login Screen</Text>
            <Text style={styles.smartMockupsText}>Smart Mockups</Text>
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={[styles.textInput, isFocused && styles.textInputFocused]}
              value={username}
              onChangeText={setUsername}
              placeholder="Your Username here"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={[styles.textInput, isFocused && styles.textInputFocused]}
              value={password}
              onChangeText={setPassword}
              placeholder="Your Password here"
              secureTextEntry={true}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flex: 1,
    marginTop: 10,
    
  },
    screen:{
        padding:10
    },
  header: {
    backgroundColor: 'transparent',
    padding: 20,
    marginTop: 120,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 48,
    fontWeight: 600,
    
  },
  smartMockupsText: {
    color: 'white',
    fontSize: 26,
  },
  formContainer: {
    alignItems: 'center',
    marginBottom: 150,
    //paddingHorizontal:10,
    paddingTop: 20, // Add top padding to prevent content from being hidden under the status bar
  },
  label: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
    alignSelf: 'flex-start',
    paddingHorizontal: 50,
  },
  textInput: {
    width: 340,
    height: 50,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderRadius: 40,
    marginBottom: 10,
  },
  textInputFocused: {
    backgroundColor: '#7C7CF8',
    borderWidth: 2,
    color: 'white',
    borderColor: 'transparent',
  },
  loginButton: {
    width: 170,
    height: 40,
    backgroundColor: 'transparent',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 700
    },
  });
export default Logintwo;

