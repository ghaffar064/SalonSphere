import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet,Image,
 } from 'react-native';
 import imagePath from '../constants/imagePath';
import Device from 'expo-device';
import * as Location from 'expo-location';
import { moderateScale } from 'react-native-size-matters';

export default function GetLocation() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState();

  useEffect(() => {
    (async () => {
    
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      let reversegeoCode = await Location.reverseGeocodeAsync(
        {
          longitude:location.coords.longitude,
          latitude:location.coords.latitude
        }
      )
      setAddress(`${reversegeoCode[0].name}, ${reversegeoCode[0].city}`);

      
      
    })();
  }, []);

  let text = 'waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = address;
  }

  return (
    <View style={{flexDirection:'row',padding:moderateScale(10)}}>
      <Image source={imagePath.nearby } />
      <Text style={styles.paragraph} >{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
 
  paragraph: {
   
    textAlign: 'center',
    
    
    
  },
});
