import {StyleSheet, View, Text,Image } from 'react-native'
import React,{useEffect} from 'react'
import * as Animatable from 'react-native-animatable';

export default function Splash({navigation}) {
    useEffect(() => {
     setTimeout(() => {
        navigation.navigate('SignIn')
        
     }, 3000);
    }, []);
  return (
    <View style= {styles.container}>
       <Image style={styles.image}  source={require('../images/logo.jpg')}></Image>
      <Animatable.Text style={styles.text} animation="fadeInDownBig">Salon Sphere</Animatable.Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
     backgroundColor:'black',
     flex:1,
     justifyContent:'center',
     alignItems:'center'
    },
    text: {
      color: 'white',
      fontSize: 36,
      fontWeight: '800',
    },
    image:{
      height:250,
      width:200
    },
   
  });
  