<<<<<<< HEAD
import { View, Text } from 'react-native'
import React from 'react'
import Routes from './src/Navigation/Routes'





export default function App() {
  return (
    
    <>
    <Routes/>
    </>
      
    
   
  )
}
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text>Salon Sphere</Text>

     

      <StatusBar style="auto" />
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
>>>>>>> 25874583229c36aab5b9ca89568ce18b6a492a03
