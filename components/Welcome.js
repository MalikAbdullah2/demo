import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
//import { Facebook, Google, Apple } from "./Icons";
import { useNavigation } from '@react-navigation/native';


const Welcome = () => {
    const navigation=useNavigation();
 

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome!</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>Login</Text>
            
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('Logintwo')}
          >
            <Text style={styles.buttonText}>LoginTwo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>LoginThree</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>LoginFour</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const styles = {container: {
    flex: 1,
    backgroundColor: '#CEBDE9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#CEBDE9',
    padding: 20,
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    width: 200,
    height: 40,
    borderRadius: 20,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'grey',
    fontSize: 16,
    fontWeight: 'bold',
  },
}




export default Welcome;
