import React from 'react';
import {View, StyleSheet, TextInput,Text,Image,TouchableOpacity} from 'react-native';
import { useState } from 'react';

export const Register = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require('../images/logo.jpg')}></Image>
        <Text style={styles.logo}>SalonSphere</Text>
        <Text style={styles.text}>Register</Text>
        <Text style={styles.p}>Welcome please create your account</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        placeholder="Enter Your Name"

      />
      <TextInput
        style={styles.input}
        onChangeText={setNumber}
        placeholder="Enter Your Mobile Number"
        keyboardType="numeric"
      />
       <TextInput
        style={styles.input}
        onChangeText={setEmail}
        placeholder="Enter Your Email Id"
      />
      <TouchableOpacity style={styles.button}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logo:{
    fontSize:30,
    marginBottom:20
  },
  container:{
    justifyContent:"center",
    alignItems:"center"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
    borderRadius: 20
  },
  text:{
    fontSize:20
  },
  image:{
    height:250,
    width:200
  },
  button:{
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 10,
    width:250,
    borderRadius: 20,
  },
  p:{
    fontSize:10,
    // fontWeight:100
  }
});

export default Register;